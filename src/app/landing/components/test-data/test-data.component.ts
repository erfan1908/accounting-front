import { TicketModel } from './../../models/ticket-model';
import { OrderRequest } from './../../models/order-request';
import { Component } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { LandingApiService } from '../../services/laning-api.service';
import { OrdersResponse } from '../../models/odres-response';
import { OrderModel } from '../../models/order-model';
import { TicketRequest } from '../../models/ticket-request';
import { AddTicketDialogComponent } from './add-ticket-dialog/add-ticket-dialog.component';

@Component({
  selector: 'app-test-data',
  standalone: true,
  imports: [
    PaginatorModule,
    CommonModule,
    PaginatorModule,
    TableModule,
    CommonModule,
    PaginatorModule,
    MatDialogModule,
    NgSelectModule,
    FormsModule,
  ],
  templateUrl: './test-data.component.html',
  styleUrl: './test-data.component.scss',
})
export class TestDataComponent {

  statusList : string[] = ["new","new project","pending"];
  constructor(
    private landingapi: LandingApiService,
    private primeng: PrimeNG,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.ainfoOrdersRequest();
    this.aInfoTicketsRequest();
    // console.log(this.myobj);
    // console.log(this.myarray);
  }

  orderrequest: OrderRequest = {
    userName: 'ainfoplus@gmail.com',
    pageNumber: 1,
  };
  ticketrequest: TicketRequest = {
    userName: 'ainfoplus@gmail.com',
    pageNumber: 1,
  };
  result : any[];
  orders: OrderModel[] = [];
  tickets: TicketModel[] = [];

 
  totalRecords: number = 0;
  pageSize: number = 3;

  ainfoOrdersRequest() {
    this.landingapi.ainfoOrdersRequest(this.orderrequest).subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res.orders;
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });
  }
  aInfoTicketsRequest() {
    this.landingapi.aInfoTicketsRequest(this.ticketrequest).subscribe({
      next: (res) => {
        console.log(res);
        console.log(res.tickets);
        this.tickets = res.tickets;
        this.totalRecords = res.totalTicketCount;
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });
  }

  addTicketDialog() {
    let dialog = this.dialog.open(AddTicketDialogComponent, {
      data: { statusList: this.statusList },
    });
    dialog.afterClosed().subscribe((res)=>{
      console.log("result of dialog is:", res);
      this.tickets.push(res);
    })

  }

  // getBanks(){
  //   this.landingapi.getBanks().subscribe({
  //     next:(result)=>{
  //       this.bankList  = result ;
  //     }
  //   })
  // }
}
