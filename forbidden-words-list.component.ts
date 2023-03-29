import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NGXLogger } from 'ngx-logger';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { BaseComponent } from 'src/app/base/base.component';
import { TenantService } from 'src/app/global/tenant-service/tenant.service';
import { UIHelper } from 'src/app/global/ui-helper';
import { ForbiddenWordConfirmationPopUpComponent } from '../forbidden-word-confirmation-pop-up/forbidden-word-confirmation-pop-up.component';
import { forbiddenWordDto } from '../model/forbidden-word.model';
import { ForbiddenWordService } from '../service/forbidden-word.service';

@Component({
  selector: 'app-forbidden-words-list',
  templateUrl: './forbidden-words-list.component.html',
  styleUrls: ['./forbidden-words-list.component.scss',
    '../../../../node_modules/font-awesome/scss/font-awesome.scss']
})
export class ForbiddenWordsListComponent extends BaseComponent implements OnInit {

  public wordResult: forbiddenWordDto[];
  formErrors = {
    forbiddenWord: '', pageError: ''
  };
  constructor(private route: ActivatedRoute,
    protected toastr: ToastrService,
    protected logger: NGXLogger,
    protected spinner: NgxSpinnerService,
    protected authService: AuthService,
    protected tenantService: TenantService,
    protected uiHelper: UIHelper,
    private modalService: NgbModal,
    private ForbiddenWordService: ForbiddenWordService) {
    super(authService, tenantService, toastr, logger, spinner, uiHelper);
  }

  ngOnInit() {
    super.ngOnInit();
    this.clearErrorSuccessMessage();
    this.GetList();
  }

  GetList() {
    this.spinner.show();
    this.ForbiddenWordService.getList().subscribe(resp => {

      this.wordResult = resp.value === undefined ? [] : resp.value;
      this.wordResult.splice(0, 0, { id: 0, canEdit: false, forbiddenWord: '' });
      this.logger.info('Forbidden words received successfully');
      this.spinner.hide();

    }, err => {
      this.handleError(err);
      this.spinner.hide();
    });
  }

  makeRowEditable(word: forbiddenWordDto) {
    this.successMessage = '';
    word.canEdit = true;
  }

  saveDetails(word: forbiddenWordDto) {
    this.successMessage = '';
    this.clearErrorSuccessMessage();
    this.ForbiddenWordService.updateForbiddenWord(word).subscribe(resp => {

      if (word.id === 0) { this.toastr.success('Forbidden word added successfully') }
      else {
        this.toastr.success('Forbidden word updated successfully')
      }

      this.GetList();
    }, err => {
      this.handleError(err);
    });
  }

  cancel(word: forbiddenWordDto): void {
    this.clearErrorSuccessMessage();
    word.canEdit = false;
    this.GetList();
  }

  delete(word: forbiddenWordDto) {
    this.clearErrorSuccessMessage();
    this.modalService.open(ForbiddenWordConfirmationPopUpComponent)
      .result
      .then(result => {
        if (result) {
          this.spinner.show();
          return this.ForbiddenWordService.deleteForbiddenWord(word).toPromise();
        }

        return Promise.reject();
      })
      .then(resp => {
        this.wordResult = this.wordResult.filter(x => x.id !== word.id);
        this.logger.info('word deleted successfully');
        this.toastr.success('word deleted successfully');
      }, (modalResp) => {
        if (modalResp) {
          if (modalResp.error) {
            this.errorMessage = modalResp.error.error.message;
            window.scrollTo(0, 0);
          }
        } else {
          this.logger.info('forbidden word rejected delete popup');
        }
      })
      .catch(err => {
        this.handleError(err);
      })
      .finally(() => this.spinner.hide());
  }

  clearErrorSuccessMessage() {
    this.successMessage = '';
    this.formErrors.pageError = '';
    this.formErrors.forbiddenWord = '';
  }
}