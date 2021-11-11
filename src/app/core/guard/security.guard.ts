import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {

    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
