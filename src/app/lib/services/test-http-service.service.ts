import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestHttpServiceService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getForecast(): Observable<any>{
    return this.httpClient.get<any>('https://localhost:44338/weatherforecast');
  }
}
