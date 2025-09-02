import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LaningApiService {

  private apiStuffUrl = 'https://tirantsp.ir/api-v2/tsp/v1/stuffs/table/headers/stuff';
  private apiStuffRowsUrl = 'https://tirantsp.ir/api-v2/tsp/v1/companies/100951/stuffs';
  private apiCustomerHeader ='https://tirantsp.ir/api-v2/tsp/v1/customers/table/headers/customer'
  private apiCustomerData ='https://tirantsp.ir/api-v2/tsp/v1/companies/100951/customers?keyword=&page-size=10&page-number=0'
  private token  = localStorage.getItem('token');
  

  private  headers = new HttpHeaders().set('Authorization', this.token as string);
  
  constructor(private http: HttpClient) {}

  getStuffHeader(): Observable<any[]> {
    return this.http.get<any[]>(this.apiStuffUrl, {headers: this.headers});
  }
  getStuffRows(pageNumber: number):Observable<any> {


    let apiStuffRowsUrl =`https://tirantsp.ir/api-v2/tsp/v1/companies/100951/stuffs?keyword=&page-size=10&page-number=${pageNumber}`
    return this.http.get<any>(apiStuffRowsUrl, {headers: this.headers});
    // return this.http.get<any>(this.apiRowsUrl, {headers: this.headers});
  }



   getCustomerHeader(): Observable<any[]> {


    return this.http.get<any[]>(this.apiCustomerHeader, {headers: this.headers});
  }
   getCustomerRows(pageNumber: number):Observable<any> {


    let apiCustomerData =`https://tirantsp.ir/api-v2/tsp/v1/companies/100951/customers?keyword=&page-size=10&page-number=${pageNumber}`
    return this.http.get<any>(apiCustomerData, {headers: this.headers});
  }

}
