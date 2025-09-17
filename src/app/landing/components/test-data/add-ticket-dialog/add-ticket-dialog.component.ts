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
import { LandingApiService } from '../../../services/laning-api.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-add-ticket-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './add-ticket-dialog.component.html',
  styleUrl: './add-ticket-dialog.component.scss',
})
export class AddTicketDialogComponent {
  ticket: FormGroup;
  statusList :string[] ;
  constructor(
    private dialog: MatDialogRef<AddTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.initTicketForm();
    this.statusList = this.data["statusList"];
    console.log("statusList is = ",this.statusList)
  }

  initTicketForm() {
    this.ticket = new FormGroup({
      project_name: new FormControl(),
      ticket_subject: new FormControl(),
      ticket_status: new FormControl(),
    });
  }
   saveTicket() {
    this.dialog.close(this.ticket.value);
  }
}
