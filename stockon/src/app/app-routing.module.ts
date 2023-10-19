import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { StockComponent } from './component/stock/stock.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: ShoppingListComponent},
  {path: 'stock', component: StockComponent},
  {path: 'in-use', component: StockComponent},
  {path: 'finished', component: StockComponent},
  {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  showHeader = false;

  constructor(private router: Router) {
    if (this.router.url === '/sign-up' || this.router.url === '/login') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
}

}