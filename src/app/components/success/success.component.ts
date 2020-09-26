import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ConstantVariables } from 'src/app/util/constants';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  emailId: string;
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    const user = this.shared.getData(ConstantVariables.userDetails);
    this.emailId = user.emailId;
  }
}
