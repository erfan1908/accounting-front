import { TicketRequest } from './../models/ticket-request';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../models/order-request';
import { OrdersResponse } from '../models/odres-response';
import { TicketResponse } from '../models/tickets-response';

@Injectable({
  providedIn: 'root',
})
export class LandingApiService {
  currentExpanded: string | null = null;
  lastExpanded: string | null = null;

  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set(
    'Authorization',
    this.token as string
  );

  //------------ ACCOUNTING STUFF -----------------
  private apiStuffUrl =
    'https://tirantsp.ir/api-v2/tsp/v1/stuffs/table/headers/stuff';
  private apiStuffRowsUrl =
    'https://tirantsp.ir/api-v2/tsp/v1/companies/100951/stuffs';

  //------------ ACCOUNTING CREATE CUSTOMER -----------------
  private apiCustomerHeader =
    'https://dev.tirantsp.ir/api-v2/accounting/v1/headers/party';
  private apiPostNewAccParty =
    'https://dev.tirantsp.ir/api-v2/accounting/v1/parties';
  private apiCustomerBank =
    'https://dev.tirantsp.ir/api-v2/accounting/v1/parties/53/bank-accounts?page=0&size=10';
  private apiBanks = 'https://dev.tirantsp.ir/api-v2/accounting/v1/banks';
  private apiBankAccountHeader =
    'https://dev.tirantsp.ir/api-v2/accounting/v1/headers/BANKACCOUNT';
  private apiGetAccountingPartyById =
    'https://dev.tirantsp.ir/api-v2/accounting/v1/parties';


  private apigetPartyType = 'https://dev.tirantsp.ir/api-v2/accounting/v1/lov/party-type';



  private apiGetProvinces = 'https://dev.tirantsp.ir/api-v2/accounting/v1/lov/provinces';
  //________________AINFOPLUS___________________________
  private orderRequestUrl = 'https://ainfoplus.ir/api/get_orders';
  private ticketRequestUrl = 'https://ainfoplus.ir/api/get_tickets';

  constructor(private http: HttpClient) {}

  getStuffHeader(): Observable<any[]> {
    return this.http.get<any[]>(this.apiStuffUrl, { headers: this.headers });
  }
  getStuffRows(pageNumber: number): Observable<any> {
    let apiStuffRowsUrl = `https://tirantsp.ir/api-v2/tsp/v1/companies/100951/stuffs?keyword=&page-size=10&page-number=${pageNumber}`;
    return this.http.get<any>(apiStuffRowsUrl, { headers: this.headers });
  }
  getCustomerHeader(): Observable<any[]> {
    return this.http.get<any[]>(this.apiCustomerHeader, {
      headers: this.headers,
    });
  }
  getPartiesrRows(pageNumber: number): Observable<any> {
    let apiPartiesData = `https://dev.tirantsp.ir/api-v2/accounting/v1/parties?page=${pageNumber}&size=10&company-id=1`;
    return this.http.get<any>(apiPartiesData, { headers: this.headers });
  }
  getAccountingCustomerById(id: number): Observable<any> {
    const apiGetAccountingCustomerById = `${this.apiGetAccountingPartyById}/${id}`;
    return this.http.get<any>(apiGetAccountingCustomerById, {
      headers: this.headers,
    });
  }
  postNewAccParty(body: any): Observable<any> {
    return this.http.post<any>(this.apiPostNewAccParty, body, {
      headers: this.headers,
    });
  }
  getBanks(): Observable<any> {
    return this.http.get<any[]>(this.apiBanks, { headers: this.headers });
  }
  getBankAccountHeader(): Observable<string[]> {
    return this.http.get<string[]>(this.apiBankAccountHeader, {
      headers: this.headers,
    });
  }
  getPartyType(): Observable<any[]> {
    return this.http.get<any[]>(this.apigetPartyType, {headers: this.headers,});
  }
  getProvinces():Observable<any[]>{
    return this.http.get<any[]>(this.apiGetProvinces,{headers: this.headers,});
  }
  getCities(provinceId:number):Observable<any[]>{
    const apiGetCities = `https://dev.tirantsp.ir/api-v2/accounting/v1/lov/provinces/${provinceId}/cities`;
    return this.http.get<any[]>(apiGetCities,{headers: this.headers,});
  }

  //_________________ainfo _____________
  ainfoOrdersRequest(orderRequest: OrderRequest): Observable<OrdersResponse> {
    return this.http.post<OrdersResponse>(this.orderRequestUrl, orderRequest, {
      headers: this.headers,
    });
  }
  aInfoTicketsRequest(
    TicketRequest: TicketRequest
  ): Observable<TicketResponse> {
    return this.http.post<TicketResponse>(
      this.ticketRequestUrl,
      TicketRequest,
      { headers: this.headers }
    );
  }
}
