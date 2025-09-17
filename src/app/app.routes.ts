import { Path } from './../../node_modules/@angular/compiler-cli/node_modules/chokidar/esm/handler.d';
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/components/login/login.component';
import { StuffManagmentComponent } from './landing/components/stuff-managment/stuff-managment.component';
import { DashboardComponent } from './landing/components/dashboard/dashboard.component';
import { StuffListComponent } from './landing/components/stuff-managment/components/stuff-list/stuff-list.component';
import { CustomerManagementComponent } from './landing/components/customer-management/customer-management.component';
import { Component } from '@angular/core';
import { CustomerListComponent } from './landing/components/customer-management/components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './landing/components/customer-management/components/customer-create/customer-create.component';
import { StuffCreateComponent } from './landing/components/stuff-managment/components/stuff-create/stuff-create.component';
import { StuffServiceCreateComponent } from './landing/components/stuff-managment/components/stuff-service-create/stuff-service-create.component';
import { TestDataComponent } from './landing/components/test-data/test-data.component';
import { BankInfoComponent } from './landing/components/bank-info/bank-info.component';
import { FundComponent } from './landing/components/fund/fund.component';
// import { CustomerInfoComponent } from './landing/components/customer-management/components/customer-info/customer-info.component';
import { CustomerInfoComponent } from './landing/components/customer-management/components/customer-info/customer-info.component';

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
