import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantVariables } from 'src/app/util/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isCheckoutClicked = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCheckout(): void {
    this.isCheckoutClicked = true;
  }

  handleClose(event): void {
    if (event && event === ConstantVariables.clicked) {
      this.isCheckoutClicked = false;
      this.router.navigate(['/']);
    }
  }
}
