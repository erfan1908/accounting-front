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
import { AddAccountDialogComponent } from './add-account-dialog/add-account-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-create',
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
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss',
})
export class CustomerCreateComponent implements OnInit {
  cutomerFormGroup: FormGroup;
  public tabIndex: number = 0;
  data: any[] = [];
  headers: any[] = [];
  bodyRows: any[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalNumber: number = 0;
  headersKey: string[] = [];
  bankList: any[];
  bankAcountHeader: string[] = [];
  bankAccounts: any[] = [];
  partyType: any[] = [];
  provinces: any[] = [];
  cities: any[] = [];

  constructor(
    private landingapi: LandingApiService,
    private primeng: PrimeNG,
    private dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.getBankAccountHeader();
    this.getBanks();
    this.getPartyType();
    this.getProvinces();
  }

  initForm() {
    this.cutomerFormGroup = new FormGroup({
      isActive: new FormControl(true),
      displayName: new FormControl(),
      companyName: new FormControl(),
      partyType: new FormControl(),
      nationalId: new FormControl(),
      economicKey: new FormControl(),
      registrationNumber: new FormControl(),
      branchCode: new FormControl(),
      creditLimit: new FormControl(),
      provinceId: new FormControl(),
      cityId: new FormControl(),
      zipCode: new FormControl(),
      addressLine: new FormControl(),
      phone: new FormControl(),
      mobile: new FormControl(),
      bankAccounts: new FormControl(),
      companyId : new FormControl(1),
    });
  }
  selectedTabChanged(event) {}
  postNewAccCustomer() {
    let newBankAccounts: any[] = [];
    console.log("bank Account = " , this.bankAccounts);
    this.bankAccounts.map((account) => {
      newBankAccounts.push({
        ...account,
        bankId: account.bankId.id,
      });
    });

    console.log('cutomerFormGroup = ', this.cutomerFormGroup.value);

    let body = {
      ...this.cutomerFormGroup.value,
      bankAccounts: newBankAccounts,
    };

    this.landingapi.postNewAccParty(body).subscribe({
      next: (res) => {
        // console.log('ثبت شد ✅', res);

        this.router.navigate(['landing/customer/list']);
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });
  }
  addAccountDialog() {
    let dialog = this.dialog.open(AddAccountDialogComponent, {
      data: { bankList: this.bankList },
    });
    dialog.afterClosed().subscribe((res) => {
      this.bankAccounts.push(res);
      // console.log("bankAccounts = ",this.bankAccounts)
    });
  }
  getBankAccountHeader() {
    this.landingapi.getBankAccountHeader().subscribe({
      next: (result) => {
        this.bankAcountHeader = Object.values(result);
        // console.log("bank account header = " , this.bankAcountHeader )
      },
    });
  }
  getBanks() {
    this.landingapi.getBanks().subscribe({
      next: (result) => {
        this.bankList = result;
        // console.log('getBanks = ', this.bankList);
      },
    });
  }
  getPartyType() {
    this.landingapi.getPartyType().subscribe({
      next: (result) => {
        this.partyType = result;
        // console.log("customer type = " , this.partyType);
      },
    });
  }
  getProvinces() {
    this.landingapi.getProvinces().subscribe({
      next: (result) => {
        this.provinces = result;
        // console.log("provinces = " , this.provinces);
      },
    });
  }
  getCities() {
    this.landingapi
      .getCities(this.cutomerFormGroup.controls['provinceId'].value)
      .subscribe({
        next: (result) => {
          this.cities = result;
          // console.log("cities = " , this.cities);
        },
      });
  }
}
