import { Component } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  data: any[] = [];
  rightPanelStyle: any = {};
  currentRecord: any;
  card: any;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadData();
    this.closeContextMenu();
  }

  loadData() {
    this.cardService.getCards().subscribe( data => {
      this.data = data;
    } )
  }

  deleteCard() {
    this.cardService.deleteCard(this.card.id).subscribe(
      (deleted: any) => {
        if (deleted) {
          this.loadData()
        } else {
          alert('Erro ao deletar!')
        }
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

  detectRightClick($event: MouseEvent, card: any) {
    $event.preventDefault();
    this.card = card;

    if ($event.button === 2) {
      this.rightPanelStyle = {
        'display': 'block',
        'position': 'absolute',
        'background': '#FFFF',
        'left': `${$event.clientX}px`,
        'top': `${$event.clientY}px`,
      };
      this.currentRecord = card;
    }
  }  

  closeContextMenu() {
    this.rightPanelStyle = {
      'display': 'none'
    }
  }

}