import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../sign-up/sign-up.component.css']
})
export class LoginComponent {

  constructor(private router: Router){}

  login() {
    this.router.navigate(['/shopping-list']);
  }

}