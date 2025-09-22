
import { LandingApiService } from '../../../../services/laning-api.service';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { CommonModule, formatCurrency } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule } from 'primeng/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DiscountDialogComponent } from './components/discount-dialog/discount-dialog.component';
import { TransportationDialogComponent } from './components/transportation-dialog/transportation-dialog.component';
import { DescriptionDialogComponent } from './components/description-dialog/description-dialog.component';
import { OtherDialogComponent } from './components/other-dialog/other-dialog.component';
@Component({
  selector: 'app-purchase-create',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    CommonModule,
    PaginatorModule,
    TableModule,
    PaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './purchase-create.component.html',
  styleUrl: './purchase-create.component.scss',
})
export class PurchaseCreateComponent {
  purchaseFormGroup: FormGroup;

  constructor(
    private landingapi: LandingApiService,
    private primeng: PrimeNG,
    private dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.purchaseFormGroup = new FormGroup({
      number: new FormControl(),
      isActive: new FormControl(true),
      date: new FormControl(),
      dateOfRegistration: new FormControl(),
      supplierType: new FormControl(),
      invoiceDescription: new FormControl(),
    });
  }

  //_____________________________________________ ***DIALOGS START*** _________________________________________
  discountDialog() {
    let dialog = this.dialog.open(DiscountDialogComponent, {
      data: {},
    });
    dialog.afterClosed().subscribe((res) => {
      //   this.bankAccounts.push(res);
      // console.log("bankAccounts = ",this.bankAccounts)
    });
  }
  
  transportationDialog() {
    let dialog = this.dialog.open(TransportationDialogComponent, {
      data: {},
    });
    dialog.afterClosed().subscribe((res) => {

    });
  }
  descriptionDialog() {
    let dialog = this.dialog.open(DescriptionDialogComponent, {
      data: {},
    });
    dialog.afterClosed().subscribe((res) => {
  
    });
  }
  taxDialog() {
  
  }
  otherDialog() {
    let dialog = this.dialog.open(OtherDialogComponent, {
      data: {},
    });
    dialog.afterClosed().subscribe((res) => {
 
    });
  }
    //_____________________________________________ ***DIALOGS END*** _________________________________________

}
