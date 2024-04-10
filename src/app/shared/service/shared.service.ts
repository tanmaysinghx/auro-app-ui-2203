import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getAppData(appId: any): Observable<any> {
    let assetUrl =  'assets/data/app-data-dummy.json';
    return this.http.get<any>(assetUrl);
  }
}
