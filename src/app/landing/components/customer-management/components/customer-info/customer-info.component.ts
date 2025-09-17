import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { LandingApiService } from '../../../../services/laning-api.service';

@Component({
  selector: 'app-customer-info',
  standalone: true,
  imports: [NgSelectModule],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.scss',
})
export class CustomerInfoComponent {
  customerId!: number;
  customerRow :any={};
  public searchKeys: {
    label: string;
    value: string;
  }[] = [
    { label: 'نام', value: 'name' },
    { label: 'شناسه عمومي', value: 'public-key' },
  ];

  constructor(
    private route: ActivatedRoute,
    private landingapi: LandingApiService
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getCutsomerById();
    console.log('Customer ID 2:', this.customerId)
  }
  getId() {
    this.route.paramMap.subscribe((params) => {
      this.customerId = Number(params.get('id')); 
      // console.log('Customer ID:', this.customerId);
    });
  }
  getCutsomerById() {
    this.landingapi.getAccountingCustomerById(this.customerId).subscribe({
      next:(res)=>{
        // console.log("show get customer by id = " , res)
        this.customerRow = res;
      }
    })
  }
}
