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
  selector: 'app-fund',
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
  templateUrl: './fund.component.html',
  styleUrl: './fund.component.scss',
})
export class FundComponent {
  fundFormGroup: FormGroup;

  constructor(
    private landingapi: LandingApiService,
    private primeng: PrimeNG
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.fundFormGroup = new FormGroup({
      accountingCode: new FormControl(),
      accountingCodeIsActive: new FormControl(),
      fundName: new FormControl(),
      currencyUnit: new FormControl(),
      description: new FormControl(),
      paymentSwitch: new FormControl(),
      paymentTerminal: new FormControl(),
      StoreReceptionist: new FormControl(),
         });
  }
}
