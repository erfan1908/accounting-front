import { LandingApiService } from './../../../../services/laning-api.service';
import { TabsGroupComponent } from '../../../tabs-group/tabs-group.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { validateVerticalPosition } from '@angular/cdk/overlay';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuContent } from "@angular/material/menu";
import { Component, OnInit ,signal} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'customer-create',
  standalone: true,
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule, MatTabsModule,MatCheckboxModule,MatIconModule, CommonModule,PaginatorModule,TableModule, CommonModule,PaginatorModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent {
  cutomerFormGroup : FormGroup
  public tabIndex : number = 0;
  data: any[] = [];
  headers: any[] = [];
  bodyRows: any[] = [];
  pageNumber : number =0 ;
  pageSize: number = 10;
  totalNumber: number = 0;
  headersKey:string[]=[]

constructor(private landingapi: LandingApiService,private primeng: PrimeNG) {}

 public searchKeys: {
    label: string;
    value: string;
  }[] = [
    { label: 'نام', value: 'name' },
    { label: 'شناسه عمومي', value: 'public-key' },
  ];
  searchedItem;
 ngOnInit(): void {
    this.initForm();
      this.landingapi.getCustomerHeader().subscribe({
      next: (response) => {
        // console.log('✅ داده‌های API:', Object.values(response));
        // this.headers = response;
        this.headers = Object.values(response);
        this.headersKey = Object.keys(response)
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      }
    });
 this.getTableData()
  }
initForm(){
  this.cutomerFormGroup = new FormGroup({
    accountingCode : new FormControl(),
    accountingCheck : new FormControl(),
    displayName : new FormControl(),
    companyName : new FormControl(),
    category : new FormControl(),
    taxType : new FormControl(),
    nationalID : new FormControl(),
    economicCode : new FormControl(),
    registrationNumber : new FormControl(),
    branchCode : new FormControl(),
    creditLimit : new FormControl(),
    province : new FormControl(),
    city : new FormControl(),
    postalCode : new FormControl(),
    addressLine : new FormControl(),
    phone : new FormControl(),
    mobile : new FormControl(),


    //------------- <API>----------------
    //  id : new FormControl(),
    // accountingCodeIsActive : new FormControl(),
    // customerType : new FormControl(),
    // createdDate : new FormControl(),
    // creditLimit : new FormControl(),
    // state : new FormControl(),
    // zipCode : new FormControl(),
    // bankAccounts : new FormControl(),


   
  })
}

selectedTabChanged(event){

}
next(){
  console.log(this.cutomerFormGroup.value)
}

getTableData(){
    this.landingapi.getCustomerRows(this.pageNumber).subscribe({
      next: (response) => {
        this.bodyRows = response['data'] ;
        this.totalNumber = response['total']
        // console.log('✅  سطرهها API:', Object.values(response));
        // console.log(this.rows);
        
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      }
    });
  }



}
