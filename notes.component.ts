import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NGXLogger } from 'ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TenantService } from 'src/app/global/tenant-service/tenant.service';
import { NoteDto } from './model/note.model';
import { NoteService } from './service/note.service';
import { SearchNoteDto } from './model/search-note.model';
import { UIHelper } from '../global/ui-helper';
import { BaseComponent } from '../base/base.component';
import { TenantConfigService } from '../global/services/tenantConfig.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss', './../../../node_modules/font-awesome/scss/font-awesome.scss']
})
export class NotesComponent extends BaseComponent implements OnInit {
  public notes: NoteDto[] = [];
  public notesForm: FormGroup;
  public accountId: string;
  public parentMenu = 'Account';
  public showAddNotes = true;
  formErrors = { dateFrom: '', dateTo: '', note: '', pageError: '' };
  schemeNotes = 'Scheme Notes';
  schemeHolderNotes = 'Scheme Holder Notes';
  accessType = 'Scheme Notes';

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private tenantConfig: TenantConfigService,
    protected toastr: ToastrService,
    protected logger: NGXLogger,
    protected spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    protected authService: AuthService,
    protected tenantService: TenantService,
    protected uiHelper: UIHelper) {
    super(authService, tenantService, toastr, logger, spinner, uiHelper);
  }

  ngOnInit() {
    super.ngOnInit();
    this.accountId = this.route.snapshot.paramMap.get('id');
    if (this.route.routeConfig.path.includes('costcentre')) {
      this.parentMenu = 'CostCentre';
    }
    if (this.route.routeConfig.path.includes('application')) {
      this.parentMenu = 'Application';
    }
    this.accessType = this.authService.isSchemeHolder ? this.schemeHolderNotes : this.schemeNotes;
    this.notesForm = this.formBuilder.group({
      dateFrom: [''],
      dateTo: [''],
      note: [''],
      accessType: [this.accessType]
    });

    this.uiHelper.subscribeForValidation(this.notesForm, this.formErrors);
    this.getNotes();
  }

  getNotes(page: number = 1) {
    this.spinner.show();
    this.clearErrorSuccessMessage();
    const searchNoteDto: SearchNoteDto = new SearchNoteDto();
    searchNoteDto.schemeCustomerId = Number(this.accountId);
    searchNoteDto.dateFrom = this.notesForm.get('dateFrom').value;
    searchNoteDto.dateTo = this.notesForm.get('dateTo').value;
    if (this.parentMenu === 'Application' && this.accessType === 'Scheme Notes') {
      this.noteService.GetApplicationNotesList(searchNoteDto, page).subscribe(resp => {
        this.notes = resp.value;
        this.pagingInfo = resp.pagingInfo;
      }, err => {
        this.handleError(err);
      })
        .add(() => {
          this.spinner.hide();
        });
    } else if ((this.parentMenu === 'CostCentre' || 'Account') && this.accessType === 'Scheme Notes') {
      this.noteService.GetList(searchNoteDto, page).subscribe(resp => {
        this.notes = resp.value === undefined ? [] : resp.value;
        this.pagingInfo = resp.pagingInfo;
      }, err => {
        this.handleError(err);
      })
        .add(() => {
          this.spinner.hide();
        });
    } else if ((this.parentMenu === 'CostCentre' || 'Account' || 'Application') && this.accessType === 'Scheme Holder Notes') {
      this.noteService.getSchemeHolderNotes(searchNoteDto, page).subscribe(resp => {
        this.notes = [];
        resp.value.notes.forEach(schemeNote => {
          const noteDto = new NoteDto();
          noteDto.note = schemeNote.note;
          noteDto.actorDescr = schemeNote.username;
          noteDto.noteDate = schemeNote.dateCreated;
          this.notes.push(noteDto);
        });
        this.pagingInfo = resp.pagingInfo;
      }, err => {
        this.handleError(err);
      })
        .add(() => {
          this.spinner.hide();
      });
    }
  }

  clearSearch() {
    this.notesForm.patchValue({dateFrom: [''],
    dateTo: [''],
    note: ['']});
    this.clearErrorSuccessMessage();
    this.formErrors = {
      dateFrom: '', dateTo: '', note: '', pageError: '',
    };
  }

  addNote() {
    this.spinner.show();
    this.clearErrorSuccessMessage();
    const noteDto: NoteDto = new NoteDto();
    noteDto.note = this.notesForm.get('note').value;
    const token = this.authService.userSession.value.token;
    noteDto.actorName = token.firstName + ' ' + token.lastName;
    if (this.authService.isSchemeHolder) {
      const SchemeNote = {
        note: this.notesForm.get('note').value,
        actorName: noteDto.actorName,
        SchemeCustomerId: this.accountId
      };
      this.noteService.postSchemeHolderNotes(SchemeNote).subscribe(resp => {
        this.addNoteSuccess('Note added successfully');
      }, err => {
        this.handleError(err);
      })
        .add(() => {
          this.spinner.hide();
        });
    } else if (this.parentMenu === 'Application') {
      this.noteService.PostApplication(this.accountId, noteDto).subscribe(resp => {
        this.addNoteSuccess('Application note added successfully');
      }, err => {
        this.handleError(err);
      })
        .add(() => {
          this.spinner.hide();
        });
    } else if (this.parentMenu === 'CostCentre' || 'Account') {
      this.noteService.Post(this.accountId, noteDto).subscribe(resp => {
        this.addNoteSuccess('Account note added successfully');
      }, err => {
        this.handleError(err);
      })
        .add(() => {
          this.spinner.hide();
        });
    }
  }
  addNoteSuccess(message) {
    this.toastr.success(message);
    this.notesForm.patchValue({dateFrom: [''],
    dateTo: [''],
    note: ['']});
    this.getNotes();
    this.successMessage = message;
  }

  onPageChange(page) {
    this.clearErrorSuccessMessage();
    this.getNotes(page);
  }

  changeAccessType(type) {
    if (type === 0) {
      this.accessType = this.schemeNotes;
      this.showAddNotes = true;
    } else {
      this.accessType = this.schemeHolderNotes;
      this.showAddNotes = false;
    }
    this.getNotes();
  }

  // removeTimezoneFromDate(a: any) {
  //   let finalDate = '';  
  //   if (a.split('+').length > 1) {
  //       let b = a.split('+');
   
  //       finalDate = b[0];
  //   } else {
  //       let b = a.split('-');
   
  //        if (b.length > 1) {
  //         b.pop();
  //         finalDate = b.join('-');
  //       }
  //   }

  //   return finalDate;
  // }

}
