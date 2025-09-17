
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuContent } from "@angular/material/menu";
import { Component, OnInit ,signal} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'stuff-service-create',
  standalone: true,
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule, MatTabsModule,MatCheckboxModule],
  templateUrl: './stuff-service-create.component.html',
  styleUrl: './stuff-service-create.component.scss'
})
export class StuffServiceCreateComponent {
 cutomerFormGroup : FormGroup
  public tabIndex : number = 0;


   public searchKeys: {
    label: string;
    value: string;
  }[] = [
    { label: 'نام', value: 'name' },
    { label: 'شناسه عمومي', value: 'public-key' },
  ];
  searchedItem;
  landingapi: any;

  ngOnInit(): void {
    this.initForm();
  }
initForm(){
  this.cutomerFormGroup = new FormGroup({
    accountingCode : new FormControl(),
    accountingCodeIsActive : new FormControl(),
    nickname : new FormControl(),
    collectionName : new FormControl(),
    category : new FormControl(),
    taxType : new FormControl(),
    nationalCode : new FormControl(),
    econamicKey : new FormControl(),
    registrationNumber : new FormControl(),
    branchNumber : new FormControl(),
    creditLimit : new FormControl(),
    province : new FormControl(),
    city : new FormControl(),
    postalCode : new FormControl(),
    address : new FormControl(),
    mobile : new FormControl(),
    phone : new FormControl(),


   
  })
}
selectedTabChanged(event){

}
next(){
  console.log(this.cutomerFormGroup.value)
}

//  getAccountingCustomerById() {
//     this.landingapi.getAccountingCustomerById().subscribe({
//       next: (res) => {
//         console.log(res);
//       },
//     });
//   }
  postAccountingCustomer() {
    let body = this.cutomerFormGroup.value;
    this.landingapi.postAccountingCustomer(body).subscribe({
      next: (res) => {
        console.log('ثبت شد ✅', res);
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
        
      },
    });
  }
}
