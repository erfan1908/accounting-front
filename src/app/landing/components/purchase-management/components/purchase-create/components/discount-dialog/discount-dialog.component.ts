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

@Component({
  selector: 'app-discount-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './discount-dialog.component.html',
  styleUrl: './discount-dialog.component.scss',
})
export class DiscountDialogComponent {
  saveAccount() {}

  cancelButton() {}
}
