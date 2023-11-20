import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { StockComponent } from './component/stock/stock.component';
import { SignUpComponent } from './component/access/sign-up/sign-up.component';
import { LoginComponent } from './component/access/login/login.component';
import { ConfirmLoginComponent } from './component/access/confirm-login/confirm-login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { AddCardComponent } from './component/add-card/add-card.component';
import { EditCardComponent } from './component/edit-card/edit-card.component';

const routes: Routes = [
  {path: '', component: SignUpComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'stock', component: StockComponent},
  {path: 'in-use', component: StockComponent},
  {path: 'finished', component: StockComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'confirm-login', component: ConfirmLoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'card/create', component: AddCardComponent},
  {path: 'card/edit/:id', component: EditCardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}