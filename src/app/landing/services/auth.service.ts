import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { LoginRequest } from '../models/login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tiranUrl = 'https://tirantsp.ir/api-v2/tsp/v1/users/login';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient , private router: Router) { }


  doLogin(log: LoginRequest): Observable<LoginRequest> {
    return this.httpClient.post<LoginRequest>(this.tiranUrl, log, this.httpOptions);
  }

  logout(): void {
        localStorage.removeItem('token'); 
        // localStorage.removeItem('userData');  
        this.router.navigate(['/login']);
      }



}
