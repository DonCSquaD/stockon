import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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