import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Divida from '../models/Divida';
import { DividaViewModel } from '../models/DividaViewModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DividaService {
  url: string = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) {}

  getDividas(): Observable<DividaViewModel[]> {
    return this.httpClient.get<DividaViewModel[]>(`${this.url}/divida`);
  }

  insertDivida(divida: Divida): Observable<any> {
    return this.httpClient.post(`${this.url}/divida`, divida, httpOptions);
  }
}
