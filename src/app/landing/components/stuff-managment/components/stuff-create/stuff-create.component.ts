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
@Component({
  selector: 'stuff-create',
  standalone: true,
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule, MatTabsModule,MatCheckboxModule,MatIconModule],
  templateUrl: './stuff-create.component.html',
  styleUrl: './stuff-create.component.scss'
})
export class StuffCreateComponent {
  [x: string]: any;

  stuffFormGroup : FormGroup
  public tabIndex : number = 0;


  //  public searchKeys: {
  //   label: string;
  //   value: string;
  // }[] = [
  //   { label: 'نام', value: 'name' },
  //   { label: 'شناسه عمومي', value: 'public-key' },
  // ];
  // searchedItem;

  ngOnInit(): void {
    this.initForm();
  }
initForm(){
  this.stuffFormGroup = new FormGroup({
    accountingCode : new FormControl(),
    accountingCodeIsActive : new FormControl(),
    nickname : new FormControl(),
    collectionName : new FormControl(),
    category : new FormControl(),
    taxType : new FormControl(),
    nationalCode : new FormControl(),
    econamicCode : new FormControl(),
    registrationNumber : new FormControl(),
    branchNumber : new FormControl(),
    creditLimit : new FormControl(),
    province : new FormControl(),
    cityId : new FormControl(),
    postalCode : new FormControl(),
    address : new FormControl(),
    mobile : new FormControl(),
    phone : new FormControl(),


   
  })
}
selectedTabChanged(event){

}
next(){
  console.log(this.stuffFormGroup.value)
}

}
