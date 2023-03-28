import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/Models/Admin';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:7027/api/AdminDetails";
  getAllAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.req);
  }
}
