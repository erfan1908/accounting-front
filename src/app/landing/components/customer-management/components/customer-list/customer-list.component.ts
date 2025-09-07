import { Component, OnInit } from '@angular/core';
import { LandingApiService } from '../../../../services/laning-api.service'
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'customer-list',
  standalone: true,
  imports: [TableModule, CommonModule,PaginatorModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  data: any[] = [];
  headers: any[] = [];
  bodyRows: any[] = [];
  pageNumber : number =0 ;
  pageSize: number = 10;
  totalNumber: number = 0;
  headersKey:string[]=[]


  
  constructor(private landingapi: LandingApiService,private primeng: PrimeNG) {}

   
  ngOnInit(): void {
    this.landingapi.getCustomerHeader().subscribe({
      next: (response) => {
        // console.log('✅ داده‌های API:', Object.values(response));
        // this.headers = response;
        this.headers = Object.values(response);
        this.headersKey = Object.keys(response)
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      }
    });


    this.getTableData()


  }

  getTableData(){
    this.landingapi.getCustomerRows(this.pageNumber).subscribe({
      next: (response) => {
        this.bodyRows = response['data'] ;
        this.totalNumber = response['total']
        // console.log('✅  سطرهها API:', Object.values(response));
        // console.log(this.rows);
        
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      }
    });
  }

  paginate(event){
    this.pageNumber = event.page
    this.getTableData()
  }
}
