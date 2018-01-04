import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";

import {SweetAlertService} from 'ngx-sweetalert2';

import {
    ProductsComponent,
    CategoriesComponent,
    SigninComponent,
    DashboardComponent,
    DashboardPanelComponent,
    DashboardIndexComponent,
    DeliveriesComponent,
    PricingComponent,
    CustomersComponent,
    ReportsComponent,
    SalesComponent,
    AdjustmentsComponent,
    StaffComponent,
    BranchesComponent,
    StoresComponent,
    ActivitiesComponent,
    AddProductModalComponent,
    ErrorHandlerComponent,
    ConfirmLoginModalComponent,
    AddDeliveryModalComponent,
    PageNotFoundComponent,
    AddPricingRuleModalComponent,
    EditPricingRuleModalComponent,
    AddStoreModalComponent,
    AddStaffModalComponent,
    ManagersComponent,
    AddManagersModalComponent,
    EditProductModalComponent,
    EditStaffModalComponent,
    EditCustomerModalComponent,
    EditManagerModalComponent,
    AddCategoryModalComponent,
    EditCategoryModalComponent,
    AddCustomerModalComponent,
    AlertErrorHandlerComponent,
    PanelLoadingComponent,
    ButtonLoadingComponent,
    EditStoreModalComponent,
    ReturnDeliveryModalComponent,
    RestockProductModalComponent,
    ReturnStockProductModalComponent,
    EditDeliveryModalComponent,
    AddSaleTransactionModalComponent,
    ViewTransactionModalComponent,
    ExportCustomerModalComponent,
    ExportStaffModalComponent,
    ExportSalesModalComponent,
    ExportAdjustmentsModalComponent,
    ExportProductsModalComponent,
    ExportPricingModalComponent,
    ExportCategoriesModalComponent,
    ExportReportsModalComponent,
    ExportStocksModalComponent,
    LedgerModalComponent

} from './components';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {
    ModalService,
    HttpService,
    RouterService,
    DashboardEventService,
    AuthGuard,
    CompanyGuard,
    DashboardGuard,
    CompanyStaffInventoryGuard,
    CompanyStaffSalesGuard,
    ProductService,
    AuthService,
    CategoryService,
    BranchService,
    RoleService,
    DeliveryService,
    ErrorResponseService,
    SearchService,
    UserService,
    AlertService,
    TransactionService,
    PricingService,
    ActivityService,
    PusherService,
    ExportService
} from "./shared";
import {TruncateModule} from "ng2-truncate";
import { StocksComponent } from './components/pages/stocks/stocks.component';
import { DeliverSingleItemModalComponent } from './components/modals/action/deliver-single-item-modal/deliver-single-item-modal.component';
import { ReturnDeliveredSingleItemComponent } from './components/modals/action/return-delivered-single-item/return-delivered-single-item.component';
import { FranchiseesComponent } from './components/pages/franchisees/franchisees.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        ProductsComponent,
        SigninComponent,
        DashboardComponent,
        DashboardPanelComponent,
        DashboardIndexComponent,
        DeliveriesComponent,
        PricingComponent,
        CustomersComponent,
        ReportsComponent,
        SalesComponent,
        AdjustmentsComponent,
        StaffComponent,
        BranchesComponent,
        StoresComponent,
        ActivitiesComponent,
        AddProductModalComponent,
        ErrorHandlerComponent,
        ConfirmLoginModalComponent,
        AddDeliveryModalComponent,
        PageNotFoundComponent,
        AddPricingRuleModalComponent,
        EditPricingRuleModalComponent,
        AddStoreModalComponent,
        AddStaffModalComponent,
        ManagersComponent,
        AddManagersModalComponent,
        EditProductModalComponent,
        EditStaffModalComponent,
        EditCustomerModalComponent,
        ManagersComponent,
        AddManagersModalComponent,
        EditManagerModalComponent,
        AddCategoryModalComponent,
        EditCategoryModalComponent,
        AddCustomerModalComponent,
        AlertErrorHandlerComponent,
        PanelLoadingComponent,
        ButtonLoadingComponent,
        EditStoreModalComponent,
        ReturnDeliveryModalComponent,
        RestockProductModalComponent,
        ReturnStockProductModalComponent,
        EditDeliveryModalComponent,
        AddSaleTransactionModalComponent,
        ViewTransactionModalComponent,
        ExportCustomerModalComponent,
        ExportStaffModalComponent,
        ExportSalesModalComponent,
        ExportAdjustmentsModalComponent,
        ExportProductsModalComponent,
        ExportPricingModalComponent,
        ExportCategoriesModalComponent,
        ExportReportsModalComponent,
        ExportStocksModalComponent,
        StocksComponent,
        DeliverSingleItemModalComponent,
        ReturnDeliveredSingleItemComponent,
        FranchiseesComponent,
        LedgerModalComponent,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        BrowserAnimationsModule,
        TruncateModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        }),
        NgbModule.forRoot()
    ],
    providers: [
        NgbActiveModal,
        SweetAlertService,
        ModalService,
        HttpService,
        RouterService,
        PusherService,
        DashboardEventService,
        AuthGuard,
        CompanyGuard,
        DashboardGuard,
        CompanyStaffInventoryGuard,
        CompanyStaffSalesGuard,
        ProductService,
        AuthService,
        CategoryService,
        BranchService,
        RoleService,
        DeliveryService,
        ErrorResponseService,
        SearchService,
        UserService,
        AlertService,
        TransactionService,
        PricingService,
        ActivityService,
        ExportService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AddProductModalComponent,
        ConfirmLoginModalComponent,
        AddDeliveryModalComponent,
        AddPricingRuleModalComponent,
        EditPricingRuleModalComponent,
        AddStoreModalComponent,
        AddStaffModalComponent,
        AddCustomerModalComponent,
        EditProductModalComponent,
        EditStaffModalComponent,
        EditCustomerModalComponent,
        AddManagersModalComponent,
        EditManagerModalComponent,
        AddCategoryModalComponent,
        EditCategoryModalComponent,
        EditStoreModalComponent,
        ReturnDeliveryModalComponent,
        RestockProductModalComponent,
        ReturnStockProductModalComponent,
        EditDeliveryModalComponent,
        AddSaleTransactionModalComponent,
        ViewTransactionModalComponent,
        ExportCustomerModalComponent,
        ExportStaffModalComponent,
        ExportSalesModalComponent,
        ExportAdjustmentsModalComponent,
        ExportProductsModalComponent,
        ExportPricingModalComponent,
        ExportCategoriesModalComponent,
        ExportReportsModalComponent,
        ExportStocksModalComponent,
        DeliverSingleItemModalComponent,
        ReturnDeliveredSingleItemComponent,
        LedgerModalComponent
    ]
})

export class AppModule {
}