import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginPayload: any): Observable<any> {
    let assetUrl =  'https://freeapi.gerasim.in/api/EventBooking/Login';
    return this.http.post<any>(assetUrl, loginPayload);
  }
}
