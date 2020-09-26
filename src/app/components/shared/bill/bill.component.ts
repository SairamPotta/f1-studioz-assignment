import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnChanges {
  @Input() totalPrice: any;
  @Input() isPaymentComponent = false;
  @Input() showHide = true;
  disCountprice = 0;
  finalPrice = 0;

  constructor() {}

  ngOnChanges(): void {
    this.findDetails();
  }

  findDetails(): void {
    this.disCountprice = Math.round(this.totalPrice / 20);
    this.finalPrice =
      this.totalPrice -
      this.disCountprice +
      ((this.totalPrice * 1.5) / 100) * 2;
  }
}
