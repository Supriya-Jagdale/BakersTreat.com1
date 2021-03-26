import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { YourcartComponent } from './yourcart/yourcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { PastriesComponent } from './pastries/pastries.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { OrderComponent } from './order/order.component';
import { BranchComponent } from './branch/branch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PageNotFoundComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    GallaryComponent,
    YourcartComponent,
    CheckoutComponent,
    CakeListComponent,
    PastriesComponent,
    CupcakeComponent,
    OrderComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
