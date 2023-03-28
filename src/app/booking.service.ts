import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from 'src/Models/Booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  
 //Variable to store the request URL for accessing API.
 req:string="https://localhost:7027/api/BookingDetails";
 mybookingreq:string="https://localhost:7027/api/BookingDetails/GetBookingsByCustomerId?id=";
 cancelreq:string="https://localhost:7027/api/BookingDetails/CancelBooking";

 createBusDetails(booking:Booking):Observable<Booking>
 {
   return this.http.post<Booking>(this.req,booking,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

 cancelBookingDetails(id:number,booking:Booking):Observable<Booking>
 {
   return this.http.put<Booking>(this.cancelreq+id,booking,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

getBookingByCustomerId(id:number):Observable<Booking[]>{
  return this.http.get<Booking[]>(this.mybookingreq+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}
 
 getBookingDetailsById(id:number):Observable<any>
 {
   return this.http.get<any>(this.req+"/"+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }

 getAllBookingDetails():Observable<Booking[]>
 {
   return this.http.get<Booking[]>(this.req);
 }




}
