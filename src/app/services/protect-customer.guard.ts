import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ConstantVariables } from '../util/constants';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ProtectCustomerGuard implements CanActivate {
  constructor(private shared: SharedService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true;
    const value = this.shared.getData(ConstantVariables.purchaseInfo);
    if (!!value) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}
