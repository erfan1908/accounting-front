import { Component, OnInit } from '@angular/core';
import { LandingApiService } from '../../../../services/laning-api.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'customer-list',
  standalone: true,
  imports: [TableModule, CommonModule, PaginatorModule,MatIconModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
})
export class CustomerListComponent implements OnInit {
  data: any[] = [];
  headers: any[] = [];
  bodyRows: any[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalNumber: number = 0;
  totalElements: number = 0;
  headersKey: string[] = [];

  constructor(
    private landingapi: LandingApiService,
    private primeng: PrimeNG,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomerHeader();
    this.getCustomerData();
  }

  getCustomerHeader() {
    this.landingapi.getCustomerHeader().subscribe({
      next: (response) => {
        // console.log('✅ داده‌های API:', Object.values(response));
        // this.headers = response;
        this.headers = Object.values(response);
        this.headersKey = Object.keys(response);
        console.log("key=" , this.headersKey , "value = " , this.headers)
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });
  }
  getCustomerData() {
    this.landingapi.getPartiesrRows(this.pageNumber).subscribe({
      next: (response) => {
        this.bodyRows = response['content'];
        this.totalNumber = response['totalPages'];
        this.totalElements = response['totalElements'];
        console.log('response: ', response);
        // console.log(this.totalNumber)
        // console.log(this.rows);
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });
  }
  goToInfoPage(id: number) {
  this.router.navigate(['landing/customer/info',id]);
}
  paginate(event) {
    this.pageNumber = event.page;
    this.getCustomerData();
  }
}
