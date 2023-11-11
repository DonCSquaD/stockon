import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { StockComponent } from './component/stock/stock.component';
import { SignUpComponent } from './component/access/sign-up/sign-up.component';
import { AddCardComponent } from './component/add-card/add-card.component';
import { LoginComponent } from './component/access/login/login.component';
import { ConfirmLoginComponent } from './component/access/confirm-login/confirm-login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    StockComponent,
    SignUpComponent,
    AddCardComponent,
    LoginComponent,
    ConfirmLoginComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }