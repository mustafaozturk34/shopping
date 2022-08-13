import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BasketComponent } from './components/basket/basket.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductComponent } from './components/product/product.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    NavbarComponent,
    PaymentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
