import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from 'src/Models/Customerss';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:7027/api/CustomerDetails";
  getAllUsers():Observable<Customers[]>{
    return this.http.get<Customers[]>(this.req);
  }
  getCustomerDetailsById(id:number):Observable<any>
{
  return this.http.get<any>(this.req+"/"+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}

createCustomerDetails(customer:Customers):Observable<Customers>
 {
   return this.http.post<Customers>(this.req,customer,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }


}
