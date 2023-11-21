import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent {

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
    this.cardService.getCards().subscribe( data => {
      this.data = data;
    } )
  }

  editCard() {
    this.router.navigate(['/card/edit/' + this.card.id]);
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