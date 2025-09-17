import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LandingApiService } from '../../../../../services/laning-api.service';

@Component({
  selector: 'app-add-account-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './add-account-dialog.component.html',
  styleUrl: './add-account-dialog.component.scss',
})
export class AddAccountDialogComponent implements OnInit {
  bankAccount: FormGroup;
  bankList: any[] = [];
  constructor(
    private dialog: MatDialogRef<AddAccountDialogComponent>,
    private landingapi: LandingApiService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.bankList = this.data['bankList'];
  }

  initForm() {
    this.bankAccount = new FormGroup({
      bankId: new FormControl(null, Validators.required),
      accountNumber: new FormControl(null, Validators.required),
      cardNumber: new FormControl(null, Validators.required),
      iban: new FormControl(null, Validators.required),
    });
  }

  saveAccount() {
    if (this.bankAccount.valid) {
      this.dialog.close(this.bankAccount.value);
    }
  }
  cancelButton() {
    this.dialog.close();
  }
}
