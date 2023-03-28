import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customer-pages',
  templateUrl: './customer-pages.component.html',
  styleUrls: ['./customer-pages.component.css']
})
export class CustomerPagesComponent {
  constructor(private route:Router,private auth:AuthService){}
  ngOnInit(){
    
  }
  logout(){
    this.auth.Logout();
  }
}
