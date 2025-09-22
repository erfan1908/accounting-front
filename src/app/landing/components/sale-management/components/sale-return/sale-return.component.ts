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

@Component({
  selector: 'app-sale-return',
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
  templateUrl: './sale-return.component.html',
  styleUrl: './sale-return.component.scss'
})
export class SaleReturnComponent {
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
}
