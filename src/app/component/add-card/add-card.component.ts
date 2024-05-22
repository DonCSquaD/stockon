import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  voltar() {
    window.history.back();
  }

  cardFormInput = {
    name: '',
    brand: '',
    weight: '',
    model: '',
    thumb: '',
    color: '',
    validitydate: '',
    quantity: '',
    purchasedate: '',
    description: '',
  }
 
  postCard(card: NgForm) {
    console.log(card)
    this.cardService.createCard(card).subscribe(
      (resposta) => {
        alert('Produto adicionado com sucesso!');
        this.router.navigate(['/shopping-list']);
      },
      (error) => {
        alert('Erro ao adicionar o produto: ' + error)
      }
    );
      

  }

}