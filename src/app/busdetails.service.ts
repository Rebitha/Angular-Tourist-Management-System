import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusDetail } from 'src/Models/BusDetail';
import { TouristSpot } from 'src/Models/touristspot';
@Injectable({
  providedIn: 'root'
})
export class BusdetailsService {

  constructor(private http:HttpClient) { }
  
 //Variable to store the request URL for accessing API.
 req:string="https://localhost:7027/api/BusDetails";
 req2:string="https://localhost:7027/api/BusDetails/GetBusDetails";
 //Method to get the list of all players from the API.
 getAllBusDetails():Observable<BusDetail[]>
 {
   return this.http.get<BusDetail[]>(this.req);
 }

 //Method  to create a new player.
 createBusDetails(bus:BusDetail):Observable<BusDetail>
 {
   return this.http.post<BusDetail>(this.req,bus,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }
getBusDetailsBySpotLoc(spot:TouristSpot):Observable<BusDetail[]>{
 
  return this.http.post<BusDetail[]>(this.req2,spot,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}
 //Method to update an existing player.
 updateBusDetails(id:number,bus:BusDetail):Observable<any>
 {
   
   return this.http.put<any>(this.req+"/"+id,bus,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }



 //Method to delete an existing player.
 deleteBusDetails(id:number):Observable<any>
 {
   return this.http.delete<any>(this.req+"/"+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }
 getBusDetailsById(id:number):Observable<BusDetail>
{
  return this.http.get<BusDetail>(this.req+"/"+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}
}

