import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

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