import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { ItemsService } from '../service/items.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private itemsService: ItemsService, private router: Router) {
    this.router = router;
  }

  canActivate() {

    // Check if the user has a valid login in the ItemsService
    if (this.itemsService.validLogin) {
      // User has a valid login, allow access to the route
      return true;
    }
    else {
      // User does not have a valid login, redirect to a login page or show an error message
      // For example, you can navigate to a login page using the Router
      this.router.navigate(['/login']);
      
      // Prevent access to the route
      return false;
    }
  }
}
