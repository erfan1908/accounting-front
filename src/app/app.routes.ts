import { PurchaseInvoicesReturnComponent } from './landing/components/purchase-management/components/purchase-invoices-return/purchase-invoices-return.component';
import { PurchaseInvoicesComponent } from './landing/components/purchase-management/components/purchase-invoices/purchase-invoices.component';
import { PurchaseCreateComponent } from './landing/components/purchase-management/components/purchase-create/purchase-create.component';
import { Path } from './../../node_modules/@angular/compiler-cli/node_modules/chokidar/esm/handler.d';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/components/login/login.component';
import { DashboardComponent } from './landing/components/dashboard/dashboard.component';
import { StuffManagmentComponent } from './landing/components/stuff-managment/stuff-managment.component';
import { StuffListComponent } from './landing/components/stuff-managment/components/stuff-list/stuff-list.component';
import { StuffCreateComponent } from './landing/components/stuff-managment/components/stuff-create/stuff-create.component';
import { StuffServiceCreateComponent } from './landing/components/stuff-managment/components/stuff-service-create/stuff-service-create.component';
import { FundComponent } from './landing/components/fund/fund.component';
import { TestDataComponent } from './landing/components/test-data/test-data.component';
import { BankInfoComponent } from './landing/components/bank-info/bank-info.component';
import { CustomerManagementComponent } from './landing/components/customer-management/customer-management.component';
import { CustomerListComponent } from './landing/components/customer-management/components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './landing/components/customer-management/components/customer-create/customer-create.component';
import { CustomerInfoComponent } from './landing/components/customer-management/components/customer-info/customer-info.component';
import { PurchaseManagementComponent } from './landing/components/purchase-management/purchase-management.component';
import { PurchaseListComponent } from './landing/components/purchase-management/components/purchase-list/purchase-list.component';
import { PurchaseReturnComponent } from './landing/components/purchase-management/components/purchase-return/purchase-return.component';
import { SaleManagementComponent } from './landing/components/sale-management/sale-management.component';
import { SaleListComponent } from './landing/components/sale-management/components/sale-list/sale-list.component';
import { SaleCreateComponent } from './landing/components/sale-management/components/sale-create/sale-create.component';
import { SaleReturnComponent } from './landing/components/sale-management/components/sale-return/sale-return.component';
import { SaleInvoicesComponent } from './landing/components/sale-management/components/sale-invoices/sale-invoices.component';
import { SaleInvoicesReturnComponent } from './landing/components/sale-management/components/sale-invoices-return/sale-invoices-return.component';
import { CustomerEditComponent } from './landing/components/customer-management/components/customer-edit/customer-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'testdata', component: TestDataComponent },
      { path: 'bankinfo', component: BankInfoComponent },
      { path: 'fund', component: FundComponent },
      {path:'purchase' , component:PurchaseManagementComponent,
        children:[
          {
            path:'',
            component:PurchaseListComponent,
          },
          {
            path:'list',
            component:PurchaseListComponent,
          },
          {
            path:'create',
            component:PurchaseCreateComponent,
          },
           {
            path:'return',
            component:PurchaseReturnComponent,
          },
           {
            path:'invoices',
            component:PurchaseInvoicesComponent,
          },
          {
            path:'invoicereturn',
            component:PurchaseInvoicesReturnComponent,
            
          },
        ]
      },
       {path:'sale' , component:SaleManagementComponent,
        children:[
          {
            path:'',
            component:SaleListComponent,
          },
          {
            path:'list',
            component:SaleListComponent,
          },
          {
            path:'create',
            component:SaleCreateComponent,
          },
           {
            path:'return',
            component:SaleReturnComponent,
          },
           {
            path:'invoices',
            component:SaleInvoicesComponent,
          },
          {
            path:'invoicereturn',
            component:SaleInvoicesReturnComponent,
            
          },
        ]
      },
      {
        path: 'customer',
        component: CustomerManagementComponent,
        children: [
          {
            path: '',
            component: CustomerListComponent,
          },

          {
            path: 'create',
            component: CustomerCreateComponent,
          },
           {
            path: 'info/:id',
            component: CustomerInfoComponent,
          },
          {
            path: 'list',
            component: CustomerListComponent,
            
          },
           {
            path: 'edit',
            component: CustomerEditComponent,
            
          },
        ],
      },
      {
        path: 'stuff',
        component: StuffManagmentComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            component: StuffListComponent,
          },
          {
            path: 'stuffcreate',
            component: StuffCreateComponent,
          },
          {
            path: 'servicecreate',
            component: StuffServiceCreateComponent,
          },
        ],
      },
    ],
  },
];
