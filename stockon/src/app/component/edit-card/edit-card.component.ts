import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent {

  currentUrl: string

  data: any = []
  
  constructor(
    private cardService: CardService,
    private router: Router,
    private location: Location
  ) {
    this.currentUrl = this.location.path();
  }


  voltar() {
    window.history.back();
  }

  ngOnInit(): void {
    this.currentUrl = this.onlyNumber(this.currentUrl)
    this.data = this.cardService.getCard(this.currentUrl)
  }

  onlyNumber(str: string): string {
    return str.replace(/\D/g, '');
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