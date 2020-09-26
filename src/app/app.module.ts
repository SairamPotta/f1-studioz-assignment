import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutStepsComponent } from './components/checkout/checkout-steps/checkout-steps.component';
import { ProductsInfoComponent } from './components/checkout/products-info/products-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material-module';
import { BillComponent } from './components/shared/bill/bill.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { SuccessComponent } from './components/success/success.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    CheckoutStepsComponent,
    ProductsInfoComponent,
    BillComponent,
    CustomerDetailsComponent,
    PaymentInfoComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
