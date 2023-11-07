import { Component } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  data: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadData()  
  }

  loadData(){
    this.cardService.getCards().subscribe( data => {
      this.data = data;
      console.log(this.data)
    } )
  }

}