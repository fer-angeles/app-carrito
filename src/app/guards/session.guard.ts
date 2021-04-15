import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from "../service/storage.service";

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( public storageService: StorageService, private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.storageService.getObject('user_data').then(result => {

      console.log(result);

      if (result != null) {
        return this.router.navigate(['home']);
      }
    });

    return true;
  }

}
