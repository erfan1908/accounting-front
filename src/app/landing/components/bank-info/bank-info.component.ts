import { LandingApiService } from '../../services/laning-api.service';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { CommonModule, formatCurrency } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'bank-info',
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
    CommonModule,
    PaginatorModule,
  ],
  templateUrl: './bank-info.component.html',
  styleUrl: './bank-info.component.scss',
})
export class BankInfoComponent {
  bankInfoFormGroup: FormGroup;
  public tabIndex: number = 0;

  constructor(
    private landingapi: LandingApiService,
    private primeng: PrimeNG
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.bankInfoFormGroup = new FormGroup({
      accountingCode: new FormControl(),
      accountingCodeIsActive: new FormControl(),
      bankName: new FormControl(),
      accountNumber: new FormControl(),
      branch: new FormControl(),
      companyName: new FormControl(),
      iban: new FormControl(),
      nameOfTheAccountHolder: new FormControl(),
      currencyUnit: new FormControl(),

      description: new FormControl(),
      bankNumRegister: new FormControl(),
      payment: new FormControl(),
      paymentTerminal: new FormControl(),
      storeNumber: new FormControl(),
    });
  }
  selectedTabChanged(event) {}
}
