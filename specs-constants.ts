import { ResourcePermission } from 'src/app/auth/resourcepermission.model';
import { Tenant } from 'src/app/global/tenant-service/tenant.model';
import { CardResultDto } from 'src/app/card/model/card-result.model';
import { Result } from 'src/app/global/models/result.model';
import { SearchNoteDto } from 'src/app/notes/model/search-note.model';
import { NoteDto } from 'src/app/notes/model/note.model';
import { LoginInfoDto } from 'src/app/search/search-home/model/login-info.model';
import { DropDownlListDto } from 'src/app/global/master-data/dropdownlist.model';
import { AddressTypeDto } from '../model/address.model';
import { AccountDetailDto } from 'src/app/account/model/account-detail.model';
import { CardValidateResultDto } from 'src/app/authorisation/model/card-validate-result.model';
import { BankDetailsDto } from '../model/bank-details.model';
import { ContactDetailsDto } from '../model/contact-details.model';
import { AccountSearchResultDto } from 'src/app/account/model/account.search.result.model';
import { ApplicationSearchResultDto } from 'src/app/account/model/application-search-result.model';
import { ApplicationDetailDto } from 'src/app/application/model/application-detail.model';
import { AccountDetailsDto } from 'src/app/account/model/account-summary.model';
import { CardAuthResponse } from 'src/app/authorisation/model/card-auth-response.model';
import { AccountInvoiceDto } from 'src/app/account/model/account-invoice.model';
import { StatementsInvoicesDto } from 'src/app/account/model/statements-invoices.model';
import { TerminalDto } from 'src/app/terminal/model/terminal.model';
import { TerminalListResultDto } from 'src/app/terminal/model/terminal-list-result.model';
import { TerminalCreateDto } from 'src/app/terminal/model/terminal-create.model';
import { TerminalCreateResultDto } from 'src/app/terminal/model/terminal-create-result.mode';
import { ViewTerminalListDto } from 'src/app/terminal/model/view-terminal-list.model';
import { TerminalDeleteDto } from 'src/app/terminal/model/terminal-delete.model';
import { CardDto } from 'src/app/card/model/card.model';
import { EVCardResultDto } from 'src/app/ev/model/evcardresult.model';
import { EvTransactionsDto } from 'src/app/ev//model/ev-transactions.model';
import { forbiddenWordDto } from 'src/app/configuration/model/forbidden-word.model';

export class SpecsConstants {
    public pagingInfo = { pageNumber: 1, recordsPerPage: 10, totalRecords: 10 };

    public resourcePermission: ResourcePermission = {
        resourceId: 'AccountApi', manageApplications: [], tenants: ['36'],
        permissions: {
            Account_Get: true, Note_GetList: true, Note_Post: true, Account_GetApplications: true,
            RequestedInfo_SendEmail: true, RequestedInfo_Put: true, ManualSalesVoucher_Post: true,
            ManualSalesVoucher_ValidateCard: true, Account_GetList: true, Account_GetPayments: true,
            MmaEmulation_TetherUser: true, Audit_Get: true, Audit_GetList: true, ManualAuth_GetList: true,
            MmaEmulation_LoginTetheredUser: true, MmaEmulation_EndMmaSession: true, ManualAuth_Post: true,
            BankDetails_CreateAuddis: true, BankDetails_CheckBankDetails: true, BankDetails_UpdateBankDetails: true,
            Account_PutCustomerAccountCompanyDetails: true, Application_Get: true
        }
    };

    public currentTenant: Tenant = { id: '36', ref: 'FG', name: 'fuelGenie' };

    public tenantList: Tenant[] = [this.currentTenant];

    public cardList: CardResultDto = {
        cardList: [{
            cardId: 123, cardName: 'Test Card', cardLimit: 500.00, lifetimeLimit: 2000.00, isActivated: 'Y'
            , regNumber: 'REG123', cardNumberFull: '123456789012345', encodedCardRestrictions: 'Fuel and oil only',
            cardStatus: 'Current', cardType: 'fuelGenie Standard', expiryDate: '01/01/2020', userID: null, userEmail: ''
        }]
    };

    public cardListResult: Result<CardResultDto> = {
        value: this.cardList,
        pagingInfo: this.pagingInfo, error: null
    };

    public searchNoteDto: SearchNoteDto = { dateFrom: new Date(2019, 7, 18), dateTo: new Date(2019, 7, 18), schemeCustomerId: 12345 };

    public noteDto: NoteDto = {
        actorDescr: 'John Doe (A11111)', actorName: 'John Doe', note: 'test note',
        noteDate: new Date(2019, 7, 18)
    };
    public searchNoteResult: Result<NoteDto[]> = {
        value: [this.noteDto],
        pagingInfo: this.pagingInfo, error: null
    };

    public addNoteResult: Result<object> = { value: new Object(), pagingInfo: null, error: null };

    public applicationNoteResult: Result<NoteDto[]> = { value: [this.noteDto], pagingInfo: this.pagingInfo, error: null };

    public schemeNoteResult: Result<any> = {
        value: {
            notes:
                [{
                    note: 'test note',
                    username: 'John Doe',
                    dateCreated: new Date(2019, 7, 18)
                }]
        }, pagingInfo: this.pagingInfo, error: null
    };

    public addApplicationNoteResult: Result<object> = { value: new Object(), pagingInfo: null, error: null };

    public loginInfoResult: Result<LoginInfoDto> = {
        value: { failedSigninAttempts: 2, lastFailedSigninDate: new Date(), lastSigninDate: new Date() },
        pagingInfo: null, error: null
    };

    public sortInvoiceIndicators: DropDownlListDto[] = [{ text: 'Vehicle Registration', value: 'R' }, { text: 'Card Number', value: 'C' }];
    public sortInvoiceIndicatorsResult: Result<DropDownlListDto[]> = {
        value: this.sortInvoiceIndicators, pagingInfo: null, error: null
    };

    public invoiceFrequencies: DropDownlListDto[] = [{ text: 'Monthly', value: 'N' },
    { text: 'Twice Monthly', value: 'Y' }, { text: 'Weekly', value: 'W' }];
    public invoiceFrequenciesResult: Result<DropDownlListDto[]> = {
        value: this.sortInvoiceIndicators, pagingInfo: null, error: null
    };

    public voucherProducts: DropDownlListDto[] = [{ text: 'Oil', value: '01' }, { text: 'Diesel', value: '02' }];
    public voucherProductsResult: Result<DropDownlListDto[]> = {
        value: this.voucherProducts, pagingInfo: null, error: null
    };

    public sainsburyChargebackReasons: DropDownlListDto[] = [{ text: 'Reason 1', value: '1' }, { text: 'Reason 2', value: '2' }];
    public sainsburyChargebackReasonsResult: Result<DropDownlListDto[]> = {
        value: this.sainsburyChargebackReasons, pagingInfo: null, error: null
    };

    public addresses: AddressTypeDto[] = [{ line1: 'line1', line2: 'line2', city: 'city', county: 'county', postcode: 'postcode' }];
    public addressesResult: Result<AddressTypeDto[]> = {
        value: this.addresses, pagingInfo: null, error: null
    };

    public locations: DropDownlListDto[] = [
        { text: '[Site] [2257] Chaddesdon [TES]', value: '2257' },
        { text: '[Site] [3767] Droylsden [TES]', value: '3767' },
    ];
    public locationsResult: Result<DropDownlListDto[]> = {
        value: this.locations, pagingInfo: null, error: null
    };

    public statusType: DropDownlListDto[] = [
        { text: 'Closed', value: 'Closed' },
        { text: 'Current', value: 'Current' },
    ];
    public statusTypeResult: Result<DropDownlListDto[]> = {
        value: this.statusType, pagingInfo: null, error: null
    };

    public tradingStyleType: DropDownlListDto[] = [
        { text: 'Limited Company or LLP', value: '1' },
        { text: 'Sole Trader', value: '2' }
    ];
    public tradingStyleResult: Result<DropDownlListDto[]> = {
        value: this.tradingStyleType, pagingInfo: null, error: null
    };

    public industrySectorType: DropDownlListDto[] = [
        { text: 'Agriculture, Hunting and Forestry', value: '1' },
        { text: 'Fishing', value: '2' },
        { text: 'Support Services', value: '3' }
    ];
    public industrySectorResult: Result<DropDownlListDto[]> = {
        value: this.industrySectorType, pagingInfo: null, error: null
    };

    public customerGroupType: DropDownlListDto[] = [
        { text: 'Normal', value: '1' },
        { text: 'Supplier', value: '2' },
    ];
    public customerGroupResult: Result<DropDownlListDto[]> = {
        value: this.customerGroupType, pagingInfo: null, error: null
    };

    public timeTradingType: DropDownlListDto[] = [
        { text: '0-6 Months', value: '1' },
        { text: '7-12 Months', value: '2' },
        { text: '6-7 Years', value: '3' }
    ];
    public timeTradingResult: Result<DropDownlListDto[]> = {
        value: this.timeTradingType, pagingInfo: null, error: null
    };

    public numberOfEmployeeType: DropDownlListDto[] = [
        { text: '1-50', value: '1' },
        { text: '51-250', value: '2' },
    ];
    public numberOfEmployeeResult: Result<DropDownlListDto[]> = {
        value: this.numberOfEmployeeType, pagingInfo: null, error: null
    };

    public titleType: DropDownlListDto[] = [
        { text: 'Mr', value: 'Mr' },
        { text: 'Mrs', value: 'Mrs' },
    ];
    public titleTypeResult: Result<DropDownlListDto[]> = {
        value: this.titleType, pagingInfo: null, error: null
    };

    public objectResult: Result<object> = { value: new Object(), pagingInfo: null, error: null };

    public validateCardResult: Result<CardValidateResultDto> = {
        value: { customerAccountName: 'test', customerRefNumber: '1', schemeCustomerId: '1', scheme: 'fuelGenie' },
        pagingInfo: null, error: null
    };

    public bankDetailsDto: BankDetailsDto = {
        bankAccountName: 'HSBC BANK PLC', bankAccountNumber: '70872490', bankName: 'HSBC BANK PLC',
        bankSortCode: '404784', bic: '404784', iban: '70872490', bankDetailsValidation: false,
        bankAddress: { line1: 'First Direct', line2: '40 Wakefield Road', city: 'Leeds', county: 'County-test', postcode: 'LS98 1FD' }
    };

    public bankDetailsDto2 = {
        bankAccountName: 'P W Sparkes', bankAccountNumber: '24301285', bankName: 'NATIONWIDE BLDG SCTY', bankSortCode: '070116',
        bankAddress: { line1: 'FlexAccount', line2: 'P.O. Box 8888', city: 'Swindon L', county: 'Wilts.', postcode: 'SN38 1NW' }
    };
    public accountSearchResult: Result<AccountSearchResultDto[]> =
        {
            value: [{
                schemeId: '36', customerRefNumber: '1', primarySchemeCustomerId: '', schemeCustomerId: '614449',
                name: 'Mark Deakin Ltd', status: 'Closed', onStop: 'true', companyRegNumber: '0001', invoiceFrequency: 'N',
                postcode: 'B37 7NZ', ppa: true
            }],
            pagingInfo: this.pagingInfo,
            error: null
        };
    public appicationSearchResult: Result<ApplicationSearchResultDto[]> =
        {
            value: [{
                schemeId: '36', primarySchemeCustomerId: '', schemeCustomerId: '614449', subStatus: 'sub status',
                name: 'Mark Deakin Ltd', status: 'Rejected', companyRegNumber: '0001',
                postcode: 'B37 7NZ', dateSubmitted: ''
            }],
            pagingInfo: this.pagingInfo,
            error: null
        };
    public paymentResult =
        {
            value: {
                paymentItems: [{
                    schemeCustomerId: '614449', paymentDate: '2010-06-25T00:00:00', paymentValue: {
                        amount: '155.25', currencyCode: '826'
                    }, paymentType: 'Payment', postingInvoiceNumber: '',
                    displayInvoiceNumber: '', lastUpdatedBy: 'UK04219', lastUpdatedOn: '2010-06-25T00:00:00', failureReason: '',
                    chequeNumber: '', creditCardCharge: { amount: '155.25', currencyCode: '826' }
                }]
            },
            pagingInfo: {}, error: {}
        };

    public accountDetailsDto: AccountDetailDto = {
        primarySchemeCustomerId: '614449', schemeCustomerId: '614449', customerRefNumber: '1', name: 'Mark Deakin Ltd',
        customerNameShownOnCard: 'Mark Deakin', status: 'Closed', invoiceFrequency: 'N', daysToPay: '15', onStop: false,
        sortInvoiceInd: 'C', printedInvoiceRequired: true, paperInvoiceCharge: true,
        customerAccountAlternativeCardAddress: {
            title: '', firstName: '', lastName: '', alternativeCardAddress: true,
            address: { line1: '', line2: '', line3: '', city: '', postcode: '' }
        }
        , registeredAddress: {
            line1: '1 Test Drive', line2: '2 Something City', city: '3 Something Town', county: 'Birmingham', postcode: 'B37 7NZ'
        },
        dateAccpt: 'May 28, 2009', dateClosed: 'Dec 6, 2018', closureReason: 'CUSTOMER REQUEST', resellerDetails: {
            subSchemeName: '',
            subSchemeCode: ''
        },
        termsAccepted: true, registrationDetails: {
            registrationQuestion: 'What is the telephone number of the prime contact of this account?',
            registrationAnswer: '01889-789798', onlineRegistrationCode: 'APZX-XRZZ-ZUWY-HXDZ'
        },
        balanceDetails: {
            outstandingBalanceAtRisk: { amount: '0.00', currencyCode: '826' },
            outstandingBalance: { amount: '-1,105.25', currencyCode: '826' }, availableToSpend: { amount: '0.00', currencyCode: '826' },
            creditLimit: { amount: '0.00', currencyCode: '826' }, currentSpend: { amount: '0.00', currencyCode: '826' },
            spendSinceLastInvoice: { amount: '0.00', currencyCode: '826' }, pendingTransactions: { amount: '0.00', currencyCode: '826' },
            transactionsReadyToBeInvoicedWithL3: { amount: '0.00', currencyCode: '826' },
            transactionsReadyToBeInvoicedWithoutLevel3: { amount: '0.00', currencyCode: '826' },
            lastStatement: { amount: '0.00', currencyCode: '826' }, depositReceived: { amount: '0.00', currencyCode: '826' },
            depositReturned: { amount: '0.00', currencyCode: '826' }, depositBalance: { amount: '0.00', currencyCode: '826' },
            payAdjustSinceLastStatement: { amount: '0.00', currencyCode: '826' },
            scheduledPayments: { amount: '0.00', currencyCode: '826' },
            interimPaymentsSinceLastStatement: { amount: '0.00', currencyCode: '826' },
            cashBalance: { amount: '0.00', currencyCode: '826' },
            cbPeriod1: { amount: '0.00', currencyCode: '826' }, cbPeriod2: { amount: '0.00', currencyCode: '826' },
            cbPeriod3: { amount: '0.00', currencyCode: '826' }, cbPeriod4: { amount: '0.00', currencyCode: '826' },
            cbPeriod5: { amount: '0.00', currencyCode: '826' }
        },
        costCentreDetails: { primarySchemeCustomerName: 'test', costCentreCode: '1234', isBillable: true },
        childCostCentre: [{ schemeCustomerId: '614449', costCentreCode: '1234', name: 'test', isBillable: true, status: 'closed' }],
        bankDetails: this.bankDetailsDto,
        customerAccountCompanyDetailsType: {
            pendingClosureDate : '', companyRegNo: '06442428',
             contact1: new ContactDetailsDto(),
            contact2: new ContactDetailsDto(),
            correspondenceAddress:
            {
                line1: 'Huntleigh Renray Ltd',
                line2: 'Winsford Industrial Estate',
                city: 'WINSFORD', county: 'Cheshire',
                postcode: 'CW7 3RB'
            },
            charityNo: '1235',
            companyTelephone: '1236548',
            customerType: 'abc',
            customerTypeId: 1,
            customerGroup: '',
            vatNo: '5454',
            partnerFirstName: '',
            partnerLastName: '',
            partnerTitle: '',
            industrySector: 'Construction & Property',
            numberOfEmployees: '1-50',
            numberOfPartners: 0,
            partnerDoB: new Date('1900-01-01T00:00:00'),
            registeredAddress:
            {
                line1: 'Huntleigh Renray Ltd',
                line2: 'Winsford Industrial Estate', city: 'WINSFORD',
                county: 'Cheshire', postcode: 'CW7 3RB'
            },
            timeTrading: '5-6 Years',
            tradingStyleName: 'Limited Company or LLP',
            parentCompanyName: '',
            country: 'US',
            regAddressCountry: 'test-countryAddress',
            invoiceEmailAddress: '',
            RegAddressCountryCode: '',
            CountryCode: ''
        },
        customerAccountMmaUserTypes: [{
            name: 'John',
            creationDate: new Date('2000-01-01T00:00:00'),
            creationDateSpecified: true,
            emailAddress: 'johanna.giles@atosorigin.com',
            lastLoginDate: new Date('2009-07-01T00:00:00'),
            lastLoginDateSpecified: true,
            passwordLastChanged: new Date('2010-04-01T00:00:00'),
            passwordLastChangedSpecified: true,
            status: 'Current',
            userRole: 'Account Holder',
        }],
        reIssueWelcomePackIsAvailable: false,
        reIssueWelcomePackIsAvailableText: 'Account not found for scheme. Welcome pack re-issue is not available',
        customerLinkedAccounts: [{
            accountLinkId: 70,
            accountLinkStatus: 'Linked',
            accountLinkStatusId: 2,
            customerName: 'Worldline',
            dateAccepted: new Date('2015-02-27T00:00:00'),
            dateRequested: new Date('2015-02-27T00:00:00'),
            linkContactName: 'Mr John Harvey',
            linkedAccountId: 614428,
            originatorAccountId: 744202,
            requestorName: 'Miss Sam Conybeare',

        }],
        customerType: '', vipAccount: true, agreedNonDDPayer: true, creditLimitWarnings: true, salesPersonID: 1,
        welcomeCall: true, welcomeCallBy: '', welcomeCallDate: new Date(), teleSalesUser: '',
        virtualAccount: false, cardFees: false, evFees: false, enablementStatus: 'Current'
    };
    public accountDetailResult: Result<AccountDetailDto> = {
        value: this.accountDetailsDto, pagingInfo: null, error: null
    };
    public applicationDetailDto: ApplicationDetailDto = {
        schemeCustomerId: '642413', customerName: 'Briggs Equipment', customerNameShownOnCard: 'Briggs', customerType: '',
        tradingName: 'Insight Subsidery', parentCompanyName: 'Insight Ltd', usefulInfo: 'We have no useful information for you',
        virtualAccount: false, vipAccount: false, cardFees: false,
        statusDetails: {
            status: 'Accepted', subStatus: '', termsAccepted: true, referralCode: '1569',
            referralCodeFieldSpecified: true, waspLatestRun: '', waspLatestRunFieldSpecified: false,
            waspProcessStatus: 'Not processed', applicationStarted: 'Feb 9, 2010', applicationSubmitted: 'Feb 18, 2018',
            applicationSubmittedFieldSpecified: true, applicationAccepted: 'Apr 1, 2018',
            applicationAcceptedFieldSpecified: true, applicationRejected: '', applicationRejectedFieldSpecified: false,
            rejectionReason: '', lastUpdatedBy: 'Web', lastUpdated: 'Feb 9, 2010', lastUpdatedFieldSpecified: true,
        },
        otherDetails: {
            outstandingAppCall: true, outstandingAppCallFieldSpecified: true, outstandingAppCallBy: 'A671265',
            outstandingAppCallByFieldSpecified: true, outstandingAppCallDate: 'May 30, 2019',
            outstandingAppCallDateFieldSpecified: true, registrationQuestion: 'mothers maiden name',
            registrationAnswer: 'ruse', webApplicationReference: 'X7ZJ-3JZZ-Z7JB-D7TH', ipAddress: '82.56.001.09',
            incentiveCode: '1001', campaignCode: '6996', telesalesUser: '', salesPersonID: 3
        },
        companyDetails: {
            tradingStyleName: 'Limited Company or LLP', industrySector: 'Support Services', customerType: 'Normal',
            parentCompanyName: '', customerGroup: 'M', foreignApplication: false,
            companyRegNo: '83674932', vatNo: '389589', charityNo: 'sa007',
            regAddressCountry: '', country: '',
            timeTrading: '6-7 Years', numberOfEmployees: '51-250', contact1: {
                title: 'Mr', firstName: 'Tom', lastName: 'Glason', positionHeld: 'MD', telephone: '0117 9094698',
                mobile: '07546809608', fax: '01217702577', emailAddress: 'tom.glason@atosorigin.com', dob: ''
            },
            contact2: {
                title: 'Mr', firstName: 'Tom', lastName: 'Glason', positionHeld: 'MD', telephone: '0117 9094698',
                mobile: '07546895433', fax: '0121770774', emailAddress: 'tom.glason@atosorigin.com', dob: ''
            },
            correspondenceAddress: {
                line1: 'Atos', line2: '1 Trinity Court', city: '', county: 'Wolverhampton', postcode: 'WV10 6UH'
            },
            registeredAddress: {
                line1: '44 Oxford Grove', line2: 'Chelmsley Wood', city: '', county: 'Birmingham', postcode: 'B37 7NZ'
            },
            companyTelephone: '012345679', numberOfPartners: '1', partnerTitle: 'Dr', partnerFirstName: 'Peter',
            partnerLastName: 'Sparkes', partnerDoB: 'Jan 1, 2001',
            invoiceEmailAddress: 'tom.glason@atosorigin.com'
        },
        creditDetails: {
            creditLimit: {
                amount: '500.00', currencyCode: '826'
            },
            estimatedMonthlySpend: {
                amount: '500.00', currencyCode: '826'
            },
            masterCustomerId: '', masterCustomerIdFieldSpecified: false,
            depositRequired: {
                amount: '500.00', currencyCode: '826'
            },
            depositReceived: {
                amount: '275.00', currencyCode: '826'
            },
            depositPaymentMethod: 'Cash'
        },
        billingDetails: {
            invoiceFrequency: 'Monthly', daysToPay: '15', daysToPayFieldSpecified: true,
            agreedNonDdPayer: false, agreedNonDdPayerFieldSpecified: true, paperInvoice: false,
            paperInvoiceFieldSpecified: true, sortInvoiceIndicator: 'C'
        },
        bankDetails: {
            bankSortCode: '204911', bankAccountNumber: '10008977', bankAccountName: 'Briggs Equipment',
            bic: '', iban: '', bankName: 'Town Hall', bankDetailsValidation: false, bankAddress: {
                line1: 'Leicester', line2: 'Leics', city: '', county: '', postcode: 'Le2 3GA'
            }
        },
        requestedInfoDetails: [{
            controlId: 1, controlSelected: true, controlNotRequired: false, requestedInformationEditable: false,
            requestedInformation: 'Sample info', dateSent: new Date(2019, 6, 19), dateReceived: new Date(2019, 6, 19)
        }], cardDetails: [{
            applicationCardId: '257', cardName: 'T E GLASON', regNumber: 'HD08NKU',
            encodedRestrictionDescription: 'Diesel only', cardType: 'fuelGenie Standard'
        }]
    };
    public applicationDetailResult: Result<ApplicationDetailDto> = {
        value: this.applicationDetailDto, pagingInfo: this.pagingInfo, error: null
    };
    public auditResult = {
        value: {
            entityId: 1,
            fieldGroups: [{
                fieldGroupId: 1, fieldGroupName: 'Test 1', fields: [
                    { fieldId: '1', displayFieldName: 'Field 1' },
                    { fieldId: '2', displayFieldName: 'Field 2' },
                    { fieldId: '3', displayFieldName: 'Field 3' }]
            },
            {
                fieldGroupId: 2, fieldGroupName: 'Test 2', fields: [
                    { fieldId: '4', displayFieldName: 'Field 4' },
                    { fieldId: '5', displayFieldName: 'Field 5' },
                    { fieldId: '6', displayFieldName: 'Field 6' }]
            }]
        }
    };

    public auditListResult = {
        value: [{
            auditDate: '2019-01-01', auditUser: 'Test 1', auditType: 'Test Ammendment 1', value: [
                'Value 1', 'Value 2', 'Value 3'
            ]
        },
        {
            auditDate: '2019-01-01', auditUser: 'Test 2', auditType: 'Test Ammendment 2', value: [
                'Value 4', 'Value 5', 'Value 6'
            ]
        }
        ],
        pagingInfo: { pageNumber: 1, recordsPerPage: 10, totalRecords: 50 }

    };
    public manualAuthResult = {
        value: [{
            authCode: '1', authDate: '2001-01-01', merchant: '1001 Worldline',
            cardNumberFull: '6356001001001', transAmount: '100.00', actor: 'A671265'
        }],
        pagingInfo: { pageNumber: 1, recordsPerPage: 10, totalRecords: 50 },
        error: {}
    };

    public cardAuths: CardAuthResponse = {
        authItemTypes: [{
            authCodeResponse: '211790', authDate: new Date(),
            cardNumberFull: '6356295002256300062', merchantName: 'Hull',
            mID: '25880109', msgSeqNo: '56', msgType: '10', settled: 'N',
            terminalId: '20240400', value:
                { amount: 72.14, currencyCode: '826' }
        }],
        pagingResultType: {
            page: 1,
            maxDisplayRows: 472,
            sortOrderAsc: true,
            sortColumnName: ''
        }
    };

    public cardAuthsResult = {
        value: this.cardAuths, pagingInfo: { pageNumber: 1, recordsPerPage: 10, totalRecords: 50 }, error: null
    };
    public cardAuthsSearch = {
        cardNumberFull: '1234', customerRefNumber: 34, customerRefNumberSpecified: false, transactionDate: new Date(),
        showDeclinedOnly: false, pagingRequestItems: { page: 1, maxDisplayRows: 1, sortOrderAsc: true, sortColumnName: '' }
    };
    public accountDetails: AccountDetailsDto = {
        showVIPAccount: false, showReseller: false, showSubSchemeCode: false,
        showPaperInvoice: false, showPaperInvoiceCharge: false, showSalesContact: false, showTeleSalesUser: false,
        showWelcomeCall: false, agreedNonDDPayer: false, creditLimitWarnings: true,
        daysToPayEditable: false, invoiceFrequencyEditable: false,
        showLinkedAccountDataTable: false, showCostCenterDataTable: false, showCustomerType: false,
        showCardFees: null,
        showEVFees: true,
        showFreezeEV: true,
        creditSummary: {
            currentSpend: true,
            availableSpend: true,
            totalSpendSinceLastInvoice: true,
            readyToBeInvoce: true,
            pendding: true,
            deposit: true
        },
        showVirtualAccount: false,
        showPendingClosureDate: false,
        showResendTC: false
    };
    public custAccUpdateRequestResult = {
        value: {
            status: 'Details updated successfully.'
        }
    };
    public updateBillingPreferenceResult = {
        value: {
            status: 'Details updated successfully.'
        }
    };
    public merchantSummaryDetailsResult: Result<any> = {
        value: {
            merchantSummaryResult: [{
                fileID: 93,
                fileName: 'SBInvoice_0025980001.pdf',
                uploadDate: '2014-09-18T00:00:00'
            }]
        },
        pagingInfo: this.pagingInfo,
        error: null
    };
    public merchantdownloadPDFResult: Result<any> = {
        value: {
            fileResult: {
                fileName: '',
                binaryData: [],
                fileExtension: ''
            }
        },
        pagingInfo: this.pagingInfo,
        error: null
    };

    public merchantLocationsResult: Result<any> = {
        value: [{ text: 'Ashford Central', value: '1' }],
        pagingInfo: this.pagingInfo,
        error: null
    };

    public statementInvoiceResults: Result<StatementsInvoicesDto> = {
        value: {
            customerAccountInvoiceItem: [{
                broughtForward: '£421.50',
                carriedForward: '£421.50',
                fileAutoId: 2996,
                invDateYYYYMMDD: new Date(),
                invoiceDate: '02012018',
                invoiceNo: 2658,
                invoicedValue: '£0.00',
                paymentDue: new Date(),
                paymentsValue: '£0.00',
                taxPeriod: '12',
                taxYear: '2017',
                unpaidInvoice: '£421.50'
            }]
        },
        pagingInfo: this.pagingInfo,
        error: null
    };

    public evCardResults: Result<EVCardResultDto> = {
        value: {
            evCard: [{
                cardID: 100701,
                enablementID: 177,
                evPackageName: 'Manasi',
                enablementStatus: 'Current',
                emailAddress: 'manasi.bude@worldline.com',
                registered: 'Yes',
                evCardDetails: {
                    rfidCardId: 177,
                    enablementId: 179,
                    visibleCardNumber: '123456789',
                    rfidCardStatus: 'Pending'
                }
            }]
        },
        pagingInfo: this.pagingInfo,
        error: null
    };

    public salesContactResult = {
        value: {
            status: 'Customer account sales person update successfully.'
        },
        pagingInfo: this.pagingInfo,
        error: null
    };

    public applicationSalesContactResult = {
        value: {
            status: 'Customer application sales person update successfully.'
        },
        pagingInfo: this.pagingInfo,
        error: null
    };

    public companyFlags: DropDownlListDto[] = [
        { text: 'Morrisons', value: 'MORR' },
        { text: 'Tesco', value: 'TESC' },
        { text: 'Sainsburys', value: 'SAIN' }
    ];
    public companyFlagsResult: Result<DropDownlListDto[]> = {
        value: this.companyFlags, pagingInfo: null, error: null
    };

    public terminaldto: TerminalDto[] = [{
        terminalId: '1234', messageSequenceNumber: '007', dateOfLastContact: '2012-01-01 12:00:00',
        initialKey: 'YES'
    }];
    public terminalResult: TerminalListResultDto = {
        terminalList: this.terminaldto
    };
    public terminaldto2: TerminalDto[] = [{
        terminalId: '1234', messageSequenceNumber: '007', dateOfLastContact: '2012-01-01 12:00:00',
        initialKey: 'YES'
    },
    {
        terminalId: '12345678', messageSequenceNumber: '313', dateOfLastContact: '2018-01-01 12:00:00',
        initialKey: 'NO'
    }];
    public terminalResult2: TerminalListResultDto = {
        terminalList: this.terminaldto2
    };
    public terminalCreate: TerminalCreateDto = {
        companyFlag: 'MORR', terminalId: '00001234'
    };
    public terminalCreateResult: TerminalCreateResultDto = {
        apacs40Initial: false
    };
    public terminalView: ViewTerminalListDto = {
        companyFlag: 'MORR', clue: '1234'
    };
    public terminalDelete: TerminalDeleteDto = {
        terminalId: '00001234'
    };

    public terminalDeleteResult = {
        value: {
            status: 'Terminal delete successfully.'
        },
        pagingInfo: null,
        error: null
    };

    public activateCard: CardDto = {
        cardId: 123, cardName: 'Test Card', cardLimit: 500.00, lifetimeLimit: 2000.00, isActivated: 'N',
        regNumber: 'REG123', cardNumberFull: '123456789012345', encodedCardRestrictions: 'Fuel and oil only',
        cardStatus: 'Current', cardType: 'fuelGenie Standard', expiryDate: '01/01/2020', userID: null, userEmail: ''
    };

    public reinstateCard: CardDto = {
        cardId: 123, cardName: 'Test Card', cardLimit: 500.00, lifetimeLimit: 2000.00, isActivated: 'Y',
        regNumber: 'REG123', cardNumberFull: '123456789012345', encodedCardRestrictions: 'Fuel and oil only',
        cardStatus: 'Cancelled', cardType: 'fuelGenie Standard', expiryDate: '01/01/2020', userID: null, userEmail: ''
    };

    public customerTypes: DropDownlListDto[] = [
        { text: 'Normal', value: '1' },
        { text: 'Supplier', value: '2' },
        { text: 'Employee', value: '3' }
    ];
    public customerTypesResult: Result<DropDownlListDto[]> = {
        value: this.customerTypes, pagingInfo: null, error: null
    };

    public pagingItems: DropDownlListDto[] = [{ text: '10', value: '10' }, { text: '20', value: '20' }, { text: '50', value: '50' }];

    public paymentTypes: DropDownlListDto[] = [
        { text: 'Direct Debit', value: '!' },
        { text: 'Chargeback', value: 'U' },
        { text: 'Cheque Return', value: 'Q' }
    ];

    public paymentTypesResult: Result<DropDownlListDto[]> = {
        value: this.paymentTypes, pagingInfo: null, error: null
    };

    public failureReasons: DropDownlListDto[] = [
        { text: 'Refer to payer', value: '1' },
        { text: 'Account Closed', value: '2' },
        { text: 'Other', value: '3' }
    ];

    public failureReasonsResult: Result<DropDownlListDto[]> = {
        value: this.failureReasons, pagingInfo: null, error: null
    };

    public paymentMethods: DropDownlListDto[] = [
        { text: 'Direct Debit', value: '1' },
        { text: 'Debit Card', value: '2' },
        { text: 'Credit Card', value: '3' }
    ];

    public paymentMethodsResult: Result<DropDownlListDto[]> = {
        value: this.paymentMethods, pagingInfo: null, error: null
    };

    public statementDDCardValues: DropDownlListDto[] = [
        { text: '2019-01-01 | Statement Value: £10.09', value: '1' },
        { text: '2020-01-01 | Statement Value: £13.49', value: '2' },
        { text: '2021-01-01 | Statement Value: £100.13', value: '3' }
    ];

    public statementDDCardValuesResult: Result<DropDownlListDto[]> = {
        value: this.statementDDCardValues, pagingInfo: null, error: null
    };

    public invoiceNumberLists: DropDownlListDto[] = [
        { text: '2019-01-01 | Invoice Value: £10.09', value: '1' },
        { text: '2020-01-01 | Invoice Value: £13.49', value: '2' },
        { text: '2021-01-01 | Invoice Value: £100.13', value: '3' }
    ];

    public invoiceNumberListsResult: Result<DropDownlListDto[]> = {
        value: this.invoiceNumberLists, pagingInfo: null, error: null
    };

    public remittanceAdviceResult: DropDownlListDto[] = [
        { text: '2019-01-01 | Invoice Value: £10.09', value: '1' },
        { text: '2020-01-01 | Invoice Value: £13.49', value: '2' }
    ];

    public remittanceAdvice: Result<DropDownlListDto[]> = {
        value: this.remittanceAdviceResult, pagingInfo: null, error: null
    };

    public remittanceAdviceInvoiceResult: DropDownlListDto[] = [
        { text: '2019-01-01 | Invoice Value: £10.09', value: '1' },
        { text: '2020-01-01 | Invoice Value: £13.49', value: '2' }
    ];

    public remittanceAdviceInvoice: Result<DropDownlListDto[]> = {
        value: this.remittanceAdviceInvoiceResult, pagingInfo: null, error: null
    };

    public transactionsResults: Result<EvTransactionsDto> = {
        value: {
            evTransactionItem: [{
            dateInvoiced: new Date(),
            duration: '120',
            evPackageName: 'PackageName1',
            evType: 'Mobile',
            grossamount: 1.15,
            locationAddress: 'Atos, Trinity Court',
            netamount: 1,
            operatorName: 'Operator',
            transactionDate: new Date(),
            transactionTime: new Date(),
            vaTamount: 0.15,
            volume: '1.38'
            }]
        },
        pagingInfo: this.pagingInfo,
        error: null
    };

    public forbiddenWordDto: forbiddenWordDto[] = [
        { id: 1, forbiddenWord: 'pass', canEdit: true },
        { id: 1, forbiddenWord: 'password', canEdit: true  },
        { id: 1, forbiddenWord: '1234' , canEdit: true },
    ];
}
