import { Component, DoCheck, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-checkout-steps',
  templateUrl: './checkout-steps.component.html',
  styleUrls: ['./checkout-steps.component.scss'],
})
export class CheckoutStepsComponent implements OnInit {
  constructor(private ar: Router) {}
  productDetailsActive = true;
  customerDetailsActive = false;
  paymentDetailsActive = false;
  isAvailable = false;

  ngOnInit(): void {
    this.ar.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res: any) => {
        console.log(res.url);
        this.updatePath(res.url);
      });

    const path = window.location;
    this.updatePath(path.pathname);
  }

  updatePath(pathName): void {
    if (pathName === '/customer') {
      this.customerDetailsActive = true;
    } else if (pathName === '/payment') {
      this.customerDetailsActive = true;
      this.paymentDetailsActive = true;
    }
    this.isAvailable =
      pathName === '/' || pathName === '/customer' || pathName === '/payment';
  }
}
