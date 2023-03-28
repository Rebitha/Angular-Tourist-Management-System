import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {
  constructor(private auth:AuthService){}
logout(){
  this.auth.logoutAdmin();
}
}
