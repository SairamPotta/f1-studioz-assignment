import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { ConstantVariables } from 'src/app/util/constants';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
})
export class PaymentInfoComponent implements OnInit {
  finalPrice;
  paymentMethod = null;
  paymentOptions = [
    {
      name: 'Cash on delivery',
      image: 'assets/Images/cash-on-delivery.svg',
    },
    {
      name: 'Online Banking',
      image: 'assets/Images/credit-card-two.svg',
    },
    {
      name: 'Pickup from store',
      image: 'assets/Images/store-pick.png',
    },
  ];

  outlets = ['Hyderbad', 'Chennai', 'Mumbai', 'Vizag', 'Vijayawada'];
  constructor(private shared: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.finalPrice = this.shared.getData(ConstantVariables.purchaseInfo);
  }

  onSelectOfTestOption(event: MatRadioChange): void {
    this.paymentMethod = event.value.name;
  }

  success(): void {
    this.router.navigate(['/success']);
  }
}
