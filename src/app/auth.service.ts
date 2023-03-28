import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) {}
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('/Login');
  }
  logoutAdmin(){
    localStorage.clear();
    this.route.navigateByUrl('/AdminLogin');
  }
  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }
}
