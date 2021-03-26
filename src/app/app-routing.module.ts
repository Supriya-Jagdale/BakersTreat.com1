import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { YourcartComponent } from './yourcart/yourcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { PastriesComponent } from './pastries/pastries.component';
import { OrderComponent } from './order/order.component';
import { BranchComponent } from './branch/branch.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomepageComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact', component:ContactusComponent},
  {path:'gallary', component:GallaryComponent},
  {path:'cart', component:YourcartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'cakelist', component:CakeListComponent},
  {path:'cupcake', component:CupcakeComponent},
  {path:'pastry', component:PastriesComponent},
  {path:'branch', component:BranchComponent},
  {path:'order', component:OrderComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
