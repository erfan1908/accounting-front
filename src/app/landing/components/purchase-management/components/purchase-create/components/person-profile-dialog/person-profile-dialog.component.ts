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
  selector: 'app-person-profile-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './person-profile-dialog.component.html',
  styleUrl: './person-profile-dialog.component.scss',
})
export class PersonProfileDialogComponent {
  saveAccount() {}

  cancelButton() {}
}
