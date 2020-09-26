import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConstantVariables } from 'src/app/util/constants';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Output() emitCloseAction = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public emitResponse(): void {
    this.emitCloseAction.emit(ConstantVariables.clicked);
  }
}
