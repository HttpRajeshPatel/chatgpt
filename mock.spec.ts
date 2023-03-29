import { of } from 'rxjs';
import { SpecsConstants } from './specs-objects/specs-constants';

export class SpecMocks {
  static specsConstants = new SpecsConstants();
  static mockToastrService = jasmine.createSpyObj('ToastrService', ['error', 'success', 'info']);
  static mockNgxSpinnerService = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);
  static mockNGXLogger = jasmine.createSpyObj('NGXLogger', ['error', 'info']);
  static mockTenantService = jasmine.createSpyObj('TenantService', ['getCurrentTenant', 'tenant']);
  static mockTenantConfigService = jasmine.createSpyObj('TenantConfigService',
    ['showCardManualAuth', 'manualVoucherProdQuantityValue', 'accountDetails', 'companyDetails', 'showCreateNewAuddis']);
  static mockAuthService = jasmine.createSpyObj('AuthService', ['getResourcePermissions', 'isLoggedIn', 'isSchemeHolder']);
  static mockMenuService = jasmine.createSpyObj('MenuService', ['getMenuData', 'setMenuData']);
  static mockReferenceService = jasmine.createSpyObj('ReferenceService', ['getSortInvoiceIndicators',
    'getAddresses', 'getInvoiceFrequencies', 'getVoucherProducts', 'getSainsburyChargebackReasons', 'getTradingStyleType',
    'getCustomerGroupType', 'getTitleType',
    'getIndustrySectorType', 'getTimeTradingType', 'getNumberOfEmployeeType', 'getLocations', 'getCompanyFlags',
    'getCustomerTypes', 'getPagingItems', 'getPaymentTypes', 'getStatusType',
    'getPaymentMethod', 'getStatementDDCardValue', 'getInvoiceNumberList', 'getFailureReason', 'getRemittanceAdvice',
    'getRemittanceAdviceInvoice']);
  static mockUiHelper = jasmine.createSpyObj('UIHelper', ['setError', 'setErrorForNested', 'setUIError',
    'subscribeForValidation', 'getGridError', 'isValidationError', 'clearFormError', 'isItemNotFoundError']);
  static mockAccountService = jasmine.createSpyObj('AccountService', ['Get', 'GetList', 'getApplications',
    'getMmaToken', 'setCurrentAccount', 'getPayments', 'getSalesContact', 'editSalesContact',
    'updateRegisteredAddressBillingPreference', 'customerAccountCompanyDetailsUpdateRequest',
    'editCustomerType', 'editCardFees', 'editCustomerNameShortened', 'customerAccountCompanyContactDetailsUpdateRequest']);
  static router = jasmine.createSpyObj('Router', ['navigateByUrl']);
  static mockAuditService = jasmine.createSpyObj('AuditService', ['Get', 'GetList']);
  static mockBankDetailsService = jasmine.createSpyObj('BankDetailsService', ['Post', 'Put', 'createAuddis']);
  static mockApplicationService = jasmine.createSpyObj('ApplicationService', ['Get', 'setCurrentApplication',
    'updateRequestedInfo', 'sendRequestedInfoEmail', 'editSalesContact', 'editCustomerNameShortened']);
  static mockCardSearchAuthService = jasmine.createSpyObj('CardSearchAuthService', ['GetList']);
  static mockManualAuthService = jasmine.createSpyObj('ManualAuthService', ['GetList']);
  static mockManualSalesVoucherService = jasmine.createSpyObj('ManualSalesVoucherService', ['validateCard', 'post']);
  static mockCardService = jasmine.createSpyObj('CardService', ['getList', 'createManualAuth', 'welcomePackIssuer',
    'updateAlternateAddress', 'activateCard', 'reinstateCard']);
  static mockNoteService = jasmine.createSpyObj('NoteService',
    ['GetList', 'Post', 'GetApplicationNotesList', 'PostApplication', 'getSchemeHolderNotes', 'postSchemeHolderNotes']);
  static mockNavService = jasmine.createSpyObj('NavService', ['Refresh', 'Clear']);
  static mockMerchantPaymentService = jasmine.createSpyObj('MerchantPaymentService', ['getPaymentSummaryResults', 'getMerchantLocations']);
  static mockDownloadService = jasmine.createSpyObj('DownloadService', ['downloadPDF']);
  static mockStatementsInvoicesService = jasmine.createSpyObj('StatementsInvoicesService', ['getStatements', 'getInvoices']);
  static mockTerminalService = jasmine.createSpyObj('TerminalService', ['getList', 'addTerminal', 'deleteTerminal']);
  static mockEVService = jasmine.createSpyObj('EVService', ['editEVFees', 'editFreezeEV', 'getEVList', 'getTransactions']);
  static mockForbiddenWordService = jasmine.createSpyObj('ForbiddenWordService', ['getList', 'updateForbiddenWord', 'deleteForbiddenWord']);

  static createCommonMocks() {


    this.mockTenantConfigService.accountDetails = this.specsConstants.accountDetails;

    (SpecMocks.mockAuthService.isLoggedIn as jasmine.Spy).and.callFake(() => {
      return of(false);
    });
    (SpecMocks.router.navigateByUrl as jasmine.Spy).and.returnValue(null);

    (SpecMocks.mockNgxSpinnerService.hide as jasmine.Spy).and.returnValue(null);

    (SpecMocks.mockNgxSpinnerService.show as jasmine.Spy).and.returnValue(null);

    (SpecMocks.mockAuthService.getResourcePermissions as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.resourcePermission);
    });

    (SpecMocks.mockAuthService.isSchemeHolder as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockTenantService.getCurrentTenant as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.currentTenant);
    });

    (SpecMocks.mockUiHelper.setError as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockUiHelper.setErrorForNested as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockUiHelper.setUIError as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockUiHelper.subscribeForValidation as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockAccountService.Get as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.accountDetailResult);
    });

    (SpecMocks.mockAccountService.customerAccountCompanyDetailsUpdateRequest as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.custAccUpdateRequestResult);
    });

    (SpecMocks.mockAccountService.customerAccountCompanyContactDetailsUpdateRequest as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.custAccUpdateRequestResult);
    });

    (SpecMocks.mockAccountService.GetList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.accountSearchResult);
    });

    (SpecMocks.mockAccountService.getApplications as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.appicationSearchResult);
    });

    (SpecMocks.mockAccountService.getPayments as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.paymentResult);
    });

    (SpecMocks.mockAccountService.setCurrentAccount as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockAccountService.getSalesContact as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockAccountService.editSalesContact as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.salesContactResult);
    });

    (SpecMocks.mockMenuService.getMenuData as jasmine.Spy).and.callFake(() => {
      return of({ applicationStatus: '', searchType: 'Account' });
    });

    (SpecMocks.mockMenuService.setMenuData as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockReferenceService.getSortInvoiceIndicators as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.sortInvoiceIndicatorsResult);
    });

    (SpecMocks.mockReferenceService.getInvoiceFrequencies as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.invoiceFrequenciesResult);
    });

    (SpecMocks.mockReferenceService.getAddresses as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.addressesResult);
    });

    (SpecMocks.mockReferenceService.getStatusType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.statusTypeResult);
    });

    (SpecMocks.mockAccountService.updateRegisteredAddressBillingPreference as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.updateBillingPreferenceResult);
    });

    (SpecMocks.mockAuditService.Get as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.auditResult);
    });

    (SpecMocks.mockAuditService.GetList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.auditListResult);
    });

    (SpecMocks.mockBankDetailsService.Post as jasmine.Spy).and.callFake(() => {
      return of({ value: this.specsConstants.bankDetailsDto2, pagingInfo: {}, error: {} });
    });

    (SpecMocks.mockBankDetailsService.Put as jasmine.Spy).and.callFake(() => {
      return of({ value: this.specsConstants.bankDetailsDto2, pagingInfo: {}, error: {} });
    });

    (SpecMocks.mockApplicationService.Get as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.applicationDetailResult);
    });

    (SpecMocks.mockApplicationService.setCurrentApplication as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockApplicationService.updateRequestedInfo as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockApplicationService.sendRequestedInfoEmail as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockApplicationService.editSalesContact as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.applicationSalesContactResult);
    });

    (SpecMocks.mockCardSearchAuthService.GetList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.cardAuthsResult);
    });

    (SpecMocks.mockUiHelper.getGridError as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockUiHelper.isItemNotFoundError as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockManualAuthService.GetList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.manualAuthResult);
    });

    (SpecMocks.mockManualSalesVoucherService.validateCard as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.validateCardResult);
    });

    (SpecMocks.mockManualSalesVoucherService.post as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.objectResult);
    });

    (SpecMocks.mockReferenceService.getVoucherProducts as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.voucherProductsResult);
    });

    (SpecMocks.mockReferenceService.getSainsburyChargebackReasons as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.sainsburyChargebackReasonsResult);
    });

    (SpecMocks.mockReferenceService.getLocations as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.locationsResult);
    });

    (SpecMocks.mockCardService.createManualAuth as jasmine.Spy).and.callFake(() => {
      return of({ value: { manualAuthCode: 12345 } });
    });

    (SpecMocks.mockCardService.getList as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.cardListResult);
    });

    (SpecMocks.mockCardService.updateAlternateAddress as jasmine.Spy).and.callFake(() => {
      return of({ value: { status: 'Details added successfully' } });
    });

    (SpecMocks.mockNoteService.GetList as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.searchNoteResult);
    });

    (SpecMocks.mockNoteService.Post as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.addNoteResult);
    });

    (SpecMocks.mockNoteService.GetApplicationNotesList as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.applicationNoteResult);
    });

    (SpecMocks.mockNoteService.getSchemeHolderNotes as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.schemeNoteResult);
    });

    (SpecMocks.mockNoteService.PostApplication as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.addApplicationNoteResult);
    });

    (SpecMocks.mockNoteService.postSchemeHolderNotes as jasmine.Spy).and.callFake(() => {
      return of(this.specsConstants.addApplicationNoteResult);
    });

    (SpecMocks.mockNavService.Refresh as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockAuthService.isLoggedIn as jasmine.Spy).and.callFake(() => {
      return of(false);
    });

    (SpecMocks.mockTenantConfigService.showCreateNewAuddis as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockMerchantPaymentService.getMerchantLocations as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.merchantLocationsResult);
    });

    (SpecMocks.mockMerchantPaymentService.getPaymentSummaryResults as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.merchantSummaryDetailsResult);
    });

    (SpecMocks.mockDownloadService.downloadPDF as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.merchantdownloadPDFResult);
    });

    (SpecMocks.mockStatementsInvoicesService.getStatements as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.statementInvoiceResults);
    });

    (SpecMocks.mockEVService.getEVList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.evCardResults);
    });

    (SpecMocks.mockReferenceService.getCompanyFlags as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.companyFlagsResult);
    });

    (SpecMocks.mockTerminalService.getList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.terminalResult2);
    });

    (SpecMocks.mockTerminalService.addTerminal as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.terminalCreateResult);
    });

    (SpecMocks.mockTerminalService.deleteTerminal as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.terminalDeleteResult);
    });

    (SpecMocks.mockCardService.activateCard as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockCardService.reinstateCard as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockAccountService.editCustomerType as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockAccountService.editCardFees as jasmine.Spy).and.callFake(() => {
      return of({});
    });

    (SpecMocks.mockReferenceService.getCustomerTypes as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.customerTypesResult);
    });

    (SpecMocks.mockReferenceService.getTradingStyleType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.tradingStyleResult);
    });

    (SpecMocks.mockReferenceService.getCustomerGroupType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.customerGroupResult);
    });

    (SpecMocks.mockReferenceService.getTitleType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.titleTypeResult);
    });

    (SpecMocks.mockReferenceService.getIndustrySectorType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.industrySectorResult);
    });

    (SpecMocks.mockReferenceService.getTimeTradingType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.timeTradingResult);
    });

    (SpecMocks.mockReferenceService.getNumberOfEmployeeType as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.numberOfEmployeeResult);
    });

    (SpecMocks.mockAccountService.editCustomerNameShortened as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.customerTypesResult);
    });

    (SpecMocks.mockReferenceService.getPagingItems as jasmine.Spy).and.callFake(() => {
      return SpecMocks.specsConstants.pagingItems;
    });

    (SpecMocks.mockReferenceService.getPaymentTypes as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.paymentTypesResult);
    });

    (SpecMocks.mockReferenceService.getPaymentMethod as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.paymentMethodsResult);
    });

    (SpecMocks.mockReferenceService.getStatementDDCardValue as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.statementDDCardValuesResult);
    });

    (SpecMocks.mockReferenceService.getInvoiceNumberList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.invoiceNumberListsResult);
    });

    (SpecMocks.mockStatementsInvoicesService.getInvoices as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.invoiceNumberListsResult);
    });

    (SpecMocks.mockReferenceService.getFailureReason as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.failureReasonsResult);
    });

    (SpecMocks.mockReferenceService.getRemittanceAdvice as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.remittanceAdvice);
    });

    (SpecMocks.mockReferenceService.getRemittanceAdviceInvoice as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.remittanceAdviceInvoice);
    });
    (SpecMocks.mockEVService.editEVFees as jasmine.Spy).and.callFake(() => {
      return of({});
    });
    (SpecMocks.mockEVService.editFreezeEV as jasmine.Spy).and.callFake(() => {
      return of({});
    });
    (SpecMocks.mockEVService.getTransactions as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.transactionsResults);
    });
    (SpecMocks.mockForbiddenWordService.getList as jasmine.Spy).and.callFake(() => {
      return of(SpecMocks.specsConstants.forbiddenWordDto);
    });
    (SpecMocks.mockForbiddenWordService.deleteForbiddenWord as jasmine.Spy).and.callFake(() => {
      return of({});
    });
    (SpecMocks.mockForbiddenWordService.updateForbiddenWord as jasmine.Spy).and.callFake(() => {
      return of({});
    });
  }
}
