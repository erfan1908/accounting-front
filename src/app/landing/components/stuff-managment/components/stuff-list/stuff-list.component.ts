import { Component, OnInit } from '@angular/core';
import { LaningApiService } from '../../../../services/laning-api.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-stuff-list',
  standalone: true,
  imports: [TableModule, CommonModule,PaginatorModule],
  templateUrl: './stuff-list.component.html',
  styleUrl: './stuff-list.component.scss',
})
export class StuffListComponent implements OnInit {
  data: any[] = [];
  headers: any[] = [];
  bodyRows: any[] = [];
  pageNumber : number =0 ;
  pageSize: number = 10;
  totalNumber: number = 0;
  headersKey:string[]=[]

  constructor(private landingapi: LaningApiService, private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.landingapi.getStuffHeader().subscribe({
      next: (response) => {
        console.log('✅ داده‌های API:', Object.values(response));
        this.headers = Object.values(response);
        this.headersKey = Object.keys(response)
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });

    this.getTableData();
  }
  

  getTableData() {
    this.landingapi.getStuffRows(this.pageNumber).subscribe({
      next: (response) => {
        console.log('✅  سطرهها API:', Object.values(response));
        this.bodyRows = response['data'];
        this.totalNumber = response['total']

        // console.log(this.bodyRows);
      },
      error: (err) => {
        console.error('❌ خطا در دریافت داده‌ها:', err);
      },
    });
  }

  paginate(event) {
    this.pageNumber = event.page;
    this.getTableData();
  }
}
