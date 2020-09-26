import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService } from 'src/app/services/shared.service';
import { ConstantVariables } from 'src/app/util/constants';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.scss'],
})
export class ProductsInfoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shared: SharedService,
    private productService: ProductsService
  ) {}
  public productsInfo: FormGroup;
  selectedValue = 0;
  productIds = [];
  productsJson = [];
  productsConstant = 'products';

  ngOnInit(): void {
    this.fetchProducts();
    this.shared.deleteAllData();
    this.initializeProductsForm();
  }

  fetchProducts(): void {
    this.productService.fetchProducts().subscribe((res) => {
      this.productsJson = res;
      this.productIds = this.productsJson.map((ele) => ele.productId);
    });
  }

  public initializeProductsForm(): void {
    this.productsInfo = this.fb.group({
      products: this.fb.array([]),
    });

    this.loadProduct();
  }

  private loadProductDetails(): FormGroup {
    return this.fb.group({
      productId: [null, Validators.required],
      productType: [''],
      purity: [''],
      weight: [''],
      price: [null],
    });
  }

  public loadProduct(): void {
    const control = this.productsInfo.controls[
      this.productsConstant
    ] as FormArray;
    control.push(this.loadProductDetails());
    this.selectedValue = control.length - 1;
  }

  getProductArray(): any {
    const control = this.productsInfo.controls[
      this.productsConstant
    ] as FormArray;
    return control.controls;
  }

  onProductChange(index): void {
    const control = this.productsInfo.controls[
      this.productsConstant
    ] as FormArray;
    console.log(control.value[0].productId);
    const { productType, purity, weight, price } = this.fetchProductInfo(
      control.value[index].productId
    );
    control.controls[index].patchValue({ productType, purity, weight, price });
  }

  fetchProductInfo(productId): any {
    return this.productsJson.find((ele) => ele.productId === productId);
  }

  getTotalPrice(): number {
    const productData = this.productsInfo.controls[this.productsConstant].value;
    const cnt = productData
      .map((ele) => ele.price)
      .reduce((a, b) => a + b || 0);
    return cnt;
  }

  naviateCustomer(): void {
    this.shared.setData(ConstantVariables.productInfo, this.productsInfo.value);
    this.shared.setData(ConstantVariables.purchaseInfo, this.getTotalPrice());
    this.router.navigate(['/customer']);
  }
}
