import { Component, OnInit } from '@angular/core';
import { TouristspotsService } from '../touristspots.service';
import { Router } from '@angular/router';
import { TouristSpot } from 'src/Models/touristspot';

@Component({
  selector: 'app-touristspots',
  templateUrl: './touristspots.component.html',
  styleUrls: ['./touristspots.component.css']
})
export class TouristspotsComponent implements OnInit{
  constructor(private obj:TouristspotsService,private route:Router){}
  touristspots:TouristSpot[]=[];
  searchspotlocation:string=''
  spot:TouristSpot={
    spotid:0,
    spotname:"",
    spotlocation:"",
    spotstate:"",
    imagetitle:"",
    imagename:""
  }
ngOnInit(){
  this.displayTouristSpots();
}

  displayTouristSpots(){
     this.obj.getAllTouristSpots().subscribe(data=>{
        this.touristspots=data;
      })
  }
  getDetailsById(spotid :number){
    this.obj.getTouristSpotById(spotid).subscribe(data=>{
      this.spot=data;
      console.log(this.spot);
    })
    console.log(this.spot);
  }
}
