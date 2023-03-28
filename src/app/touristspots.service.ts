import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristSpot } from 'src/Models/touristspot';
@Injectable({
  providedIn: 'root'
})
export class TouristspotsService {
 //Creating an instance of HttpClient inside the constructor.
 constructor(private http:HttpClient) { }
  
 //Variable to store the request URL for accessing API.
 req:string="https://localhost:7027/api/Tourist";

 
 //Method to get the list of all players from the API.
 getAllTouristSpots():Observable<TouristSpot[]>
 {
   return this.http.get<TouristSpot[]>(this.req);
 }

 //Method  to create a new player.
 createTouristSpots(player:TouristSpot):Observable<TouristSpot>
 {
   return this.http.post<TouristSpot>(this.req,player,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

 //Method to update an existing player.
 updateTouristSpots(id:number,player:TouristSpot):Observable<any>
 {
   
   return this.http.put<any>(this.req+"/"+id,player,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }


 //Method to delete an existing player.
 deleteTouristSpots(id:number):Observable<any>
 {
   return this.http.delete<any>(this.req+"/"+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }


 getTouristSpotById(id:number):Observable<any>
 {
   return this.http.get<any>(this.req+"/"+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }

}
