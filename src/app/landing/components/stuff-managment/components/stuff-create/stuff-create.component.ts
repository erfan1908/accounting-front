import { LandingApiService } from './../../../../services/laning-api.service';
import { TabsGroupComponent } from '../../../tabs-group/tabs-group.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { validateVerticalPosition } from '@angular/cdk/overlay';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuContent } from "@angular/material/menu";
import { Component, OnInit ,signal} from '@angular/core';
@Component({
  selector: 'stuff-create',
  standalone: true,
  imports: [NgSelectModule, FormsModule, ReactiveFormsModule, MatTabsModule],
  templateUrl: './stuff-create.component.html',
  styleUrl: './stuff-create.component.scss'
})
export class StuffCreateComponent {

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

  ngOnInit(): void {
    this.initForm();
  }
initForm(){
  this.cutomerFormGroup = new FormGroup({
    accountingCode : new FormControl(),
    accountingCheck : new FormControl(),
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

}
