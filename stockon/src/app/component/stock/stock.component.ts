import { Component } from '@angular/core';
import { CardService } from 'src/app/service/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  data: any[] = [];
  rightPanelStyle: any = {};
  currentRecord: any;
  card: any;

  constructor(
    private cardService: CardService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loadData();
    this.closeContextMenu();
  }

  loadData() {
    this.cardService.getCardsStock().subscribe( data => {
      this.data = data;
    })
  }

  deleteCard() {
    this.cardService.deleteCardStock(this.card.id).subscribe(
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