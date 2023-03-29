import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { UserSession } from '../auth/user-session.model';
import { JwtToken } from '../auth/jwt-token.model';
import { SpecsModule } from '../shared/specs-module';
import { SpecMocks } from '../shared/mock.spec';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeAll(() => {
    SpecMocks.createCommonMocks();
  });

  SpecMocks.mockAuthService.userSession = new BehaviorSubject<UserSession>(new UserSession(new JwtToken(''), ''));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [],
      imports: [SpecsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get notes', () => {
    component.getNotes(1);
    expect(component.notes.length).toEqual(1);
    expect(component.pagingInfo.pageNumber).toEqual(1);
    expect(component.pagingInfo.totalRecords).toEqual(10);
  });

  it('should get notes for Application', () => {
    component.parentMenu = 'Application';
    component.accessType = 'Scheme Notes';
    component.getNotes(1);
    expect(component.notes.length).toEqual(1);
    expect(component.pagingInfo.pageNumber).toEqual(1);
    expect(component.pagingInfo.totalRecords).toEqual(10);
  });

  it('should get notes for Scheme Holder', () => {
    component.parentMenu = 'Application';
    component.accessType = 'Scheme Holder Notes';
    component.getNotes(1);
    expect(component.notes.length).toEqual(1);
    expect(component.pagingInfo.pageNumber).toEqual(1);
    expect(component.pagingInfo.totalRecords).toEqual(10);
  });

  it('should add note', () => {
    component.addNote();
    expect(component.successMessage).toEqual('Note added successfully');
  });

  it('should add notes for application', () => {
    component.parentMenu = 'Application';
    component.addNote();
    expect(component.successMessage).toEqual('Note added successfully');
  });

  it('should show and hide the textbox based on roles', () => {
    component.changeAccessType(1);
    expect(component.showAddNotes).toBeFalsy();
    expect(component.accessType).toEqual('Scheme Holder Notes');
    component.changeAccessType(0);
    expect(component.showAddNotes).toBeTruthy();
    expect(component.accessType).toEqual('Scheme Notes');
  });

  it('should clear error and sucess message', () => {
    component.formErrors.pageError = 'error';
    component.successMessage = 'success';
    component.clearErrorSuccessMessage();
    expect(component.successMessage).toEqual('');
    expect(component.formErrors.pageError).toEqual('');
  });

  it('should change page', () => {
    spyOn(component, 'getNotes').and.returnValue('');
    component.onPageChange(2);
    expect(component.getNotes).toHaveBeenCalledWith(2);
  });

  it('should clear fields on clearSearch', () => {
    component.notesForm.setValue({ dateFrom: new Date(2019, 1, 1),
      dateTo: new Date(2019, 1, 1), note: 'test', accessType: 'Scheme Notes' });
    component.formErrors.pageError = 'error';
    component.formErrors.dateFrom = 'error';
    component.successMessage = 'success';
    component.clearSearch();
    expect(component.successMessage).toEqual('');
    expect(component.formErrors.pageError).toEqual('');
    expect(component.formErrors.dateFrom).toEqual('');
    expect(component.notesForm.value).toEqual({ dateFrom: [''], dateTo: [''], note: [''], accessType: 'Scheme Notes' });
  });

  it('should throw error when notes are not received properly', () => {
    (SpecMocks.mockNoteService.GetApplicationNotesList as jasmine.Spy).and.callFake(() => {
      return throwError(new Error('test error'));
    });
    component.parentMenu = 'Application';
    component.accessType = 'Scheme Notes';
    component.getNotes(1);
    expect(SpecMocks.mockNGXLogger.error).toHaveBeenCalled();
  });

  it('should throw error when notes are not received properly for Account', () => {
    (SpecMocks.mockNoteService.GetList as jasmine.Spy).and.callFake(() => {
      return throwError(new Error('test error'));
    });
    component.parentMenu = 'Account';
    component.accessType = 'Scheme Notes';
    component.getNotes(1);
    expect(SpecMocks.mockNGXLogger.error).toHaveBeenCalled();
  });

  it('should throw error when notes are not received properly for Scheme Holder', () => {
    (SpecMocks.mockNoteService.getSchemeHolderNotes as jasmine.Spy).and.callFake(() => {
      return throwError(new Error('test error'));
    });
    component.parentMenu = 'Application';
    component.accessType = 'Scheme Holder Notes';
    component.getNotes(1);
    expect(SpecMocks.mockNGXLogger.error).toHaveBeenCalled();
  });

  it('should throw error when notes are not added properly for Account', () => {
    (SpecMocks.mockNoteService.Post as jasmine.Spy).and.callFake(() => {
      return throwError(new Error('test error'));
    });
    component.parentMenu = 'Account';
    component.addNote();
    expect(SpecMocks.mockNGXLogger.error).toHaveBeenCalled();
  });

  it('should throw error when notes are not added properly for Application', () => {
    (SpecMocks.mockNoteService.PostApplication as jasmine.Spy).and.callFake(() => {
      return throwError(new Error('test error'));
    });
    component.parentMenu = 'Application';
    component.addNote();
    expect(SpecMocks.mockNGXLogger.error).toHaveBeenCalled();
  });

  it('should throw error when notes are not received properly for Scheme Holder', () => {
    (SpecMocks.mockNoteService.postSchemeHolderNotes as jasmine.Spy).and.callFake(() => {
      return throwError(new Error('test error'));
    });
    component.addNote();
    expect(SpecMocks.mockNGXLogger.error).toHaveBeenCalled();
  });
});
