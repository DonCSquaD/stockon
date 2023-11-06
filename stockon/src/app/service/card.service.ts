import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private uriApi = 'https://6547f3ab902874dff3ace444.mockapi.io/stockon/cards';

  constructor(private http:HttpClient) { }

  public getCards(): Observable<any> {
    return this.http.get<any>(this.uriApi);
  }
  
}
