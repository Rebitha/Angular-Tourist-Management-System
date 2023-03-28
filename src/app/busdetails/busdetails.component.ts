import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusDetail } from 'src/Models/BusDetail';
import { BusdetailsService } from '../busdetails.service';
import { ActivatedRoute } from '@angular/router';
import { TouristSpot } from 'src/Models/touristspot';
import { TouristspotsService } from '../touristspots.service';
@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css']
})
export class BusdetailsComponent {
  errormsg=""
  spotid:number=0;
  constructor(private obj:BusdetailsService,private route:Router,private _Activatedroute:ActivatedRoute,private touristobj:TouristspotsService){}
  busDetails:BusDetail[]=[];
spot:TouristSpot={
  spotid:0,
  spotname:"",
  spotlocation:"",
  spotstate:"",
  imagetitle:"",
  imagename:""
};
ngOnInit(){
  this.displayBusDetails();
}

  displayBusDetails(){
     
    this._Activatedroute.params.subscribe(params => { 
 
        this.spotid = params['id']; 
        console.log(params);
        console.log(this.spotid);
       this.touristobj.getTouristSpotById(this.spotid).subscribe(data=>{
          this.spot=data;
          console.log(this.spot.imagename);

          this.obj.getBusDetailsBySpotLoc(this.spot).subscribe(data=>{
            this.busDetails=data;
            if(this.busDetails.length<=0){
              this.errormsg="Sorry...Currently there is no travel service to this destination"
            }
            console.log(this.busDetails);
          });
        });
    });

     
  }
}
