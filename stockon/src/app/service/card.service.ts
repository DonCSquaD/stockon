import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private uriApi = 'https://6547f3ab902874dff3ace444.mockapi.io/stockon/cards/';
  private stockUrl = 'https://6547f3ab902874dff3ace444.mockapi.io/stockon/stock/';

  constructor(private http:HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get<Card[]>(this.uriApi + '');
  }
  
  getCard(id: string): Observable<any> {
    return this.http.get<Card>(this.uriApi + id);
  }
  
  createCard(data: any):Observable<any> {
    return this.http.post<any>(this.uriApi, data);
  }

  editCard(id: string, data:any):Observable<any> {
    return this.http.put<any>(this.uriApi + id, data);
  }
  
  deleteCard(id: string):Observable<any> {
    return this.http.delete(this.uriApi + id);
  }
  


  getCardsStock(): Observable<any> {
    return this.http.get<Card[]>(this.stockUrl);
  }
  
  getCardStock(id: string): Observable<any> {
    return this.http.get<Card>(this.stockUrl + id);
  }
  
  createCardStock(data: any):Observable<any> {
    return this.http.post<any>(this.stockUrl, data);
  }
  
  deleteCardStock(id: string):Observable<any> {
    return this.http.delete(this.stockUrl + id);
  }

}