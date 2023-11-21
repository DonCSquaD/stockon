import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { FormControl, FormGroup, NgForm  } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})

export class EditCardComponent {

  currentUrl: string

  editCard = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    weight: new FormControl(''),
    model: new FormControl(''),
    thumb: new FormControl(''),
    color: new FormControl(''),
    validitydate: new FormControl(''),
    quantity: new FormControl(''),
    purchasedate: new FormControl(''),
    description: new FormControl('')
  })
  
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
    this.currentUrl = this.onlyNumber(this.currentUrl),
    console.log(this.currentUrl)
    this.cardService.getCard(this.currentUrl).subscribe((result) => {
      this.editCard = new FormGroup({
        name: new FormControl(result['name']),
        brand: new FormControl(result['brand']),
        weight: new FormControl(result['weight']),
        model: new FormControl(result['model']),
        thumb: new FormControl(result['thumb']),
        color: new FormControl(result['color']),
        validitydate: new FormControl(result['validitydate']),
        quantity: new FormControl(result['quantity']),
        purchasedate: new FormControl(result['purchasedate']),
        description: new FormControl(result['description']),
      })
    })
  }

  updateCard() {
    this.cardService.editCard(this.currentUrl, this.editCard.value).subscribe((result) => {
      alert(result + "Produto atualizado com sucesso!")
    })
  }

  onlyNumber(str: string): string {
    return str.replace(/\D/g, '');
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