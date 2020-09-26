import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsInfoComponent } from './components/checkout/products-info/products-info.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { SuccessComponent } from './components/success/success.component';
import { ProtectCustomerGuard } from './services/protect-customer.guard';
import { ProtectPaymentGuard } from './services/protect-payment.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsInfoComponent,
  },
  {
    path: 'customer',
    component: CustomerDetailsComponent,
    canActivate: [ProtectCustomerGuard],
  },
  {
    path: 'payment',
    component: PaymentInfoComponent,
    canActivate: [ProtectPaymentGuard],
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
