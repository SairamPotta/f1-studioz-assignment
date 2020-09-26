import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { ConstantVariables } from 'src/app/util/constants';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private shared: SharedService
  ) {}
  customerDetails: FormGroup;
  finalPrice;
  ngOnInit(): void {
    this.finalPrice = this.shared.getData(ConstantVariables.purchaseInfo);
    this.initalizeCustomerDetails();
  }

  initalizeCustomerDetails(): void {
    this.customerDetails = this.formBuilder.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.email, Validators.required]],
      phoneNumber: [null, Validators.required],
      PAN: ['', Validators.required],
      addressInfo: this.formBuilder.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        pincode: [null, Validators.required],
      }),
    });
  }

  naviatePayment(): void {
    this.shared.setData(
      ConstantVariables.userDetails,
      this.customerDetails.value
    );
    this.router.navigate(['/payment']);
  }
}
