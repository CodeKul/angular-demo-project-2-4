import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private regSer: RegistrationService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.regSer.getUser());
    if (this.regSer.getUser() == null) {
      this.router.navigate(['']);
    }else {
      return true;
    }
    return false;
  }
}
