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
  selector: 'app-transportation-dialog',
  standalone: true,
     imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  
  templateUrl: './transportation-dialog.component.html',
  styleUrl: './transportation-dialog.component.scss'
})
export class TransportationDialogComponent {
    saveAccount() {

    }
  
  cancelButton() {
}
}
