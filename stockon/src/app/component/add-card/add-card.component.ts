import { Component } from '@angular/core';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  constructor() { }

  voltar() {
    window.history.back();
  }
}