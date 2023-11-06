import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { StockComponent } from './component/stock/stock.component';
import { SignUpComponent } from './component/access/sign-up/sign-up.component';
import { FormComponent } from './component/form/form.component';
import { LoginComponent } from './component/access/login/login.component';
import { CardComponent } from './component/card/card.component';
import { ConfirmLoginComponent } from './component/access/confirm-login/confirm-login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    StockComponent,
    SignUpComponent,
    FormComponent,
    LoginComponent,
    CardComponent,
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