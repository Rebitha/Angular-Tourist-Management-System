import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BusDetail } from 'src/Models/BusDetail';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TouristspotsService } from '../touristspots.service';
import { TouristSpot } from 'src/Models/touristspot';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-adminaddtourist',
  templateUrl: './adminaddtourist.component.html',
  styleUrls: ['./adminaddtourist.component.css']
})
export class AdminaddtouristComponent {
  errordest=""
  errorcap=""
  id=0;
  errormsg="";
  constructor(private touristserviceobj:TouristspotsService ,private route:Router,private http:HttpClient){}
  submitted=false;
  adminaddtouristform:FormGroup=new FormGroup({})
  tourist:TouristSpot={
    spotid:0,
    spotname:"",
    spotlocation:"",
    spotstate:"",
    imagetitle:"",
    imagename:""
  }
  file:any;
  getFile(event:any){
    this.file=event.target.files[0];
    console.log("file : "+this.file);
  }
  ngOnInit(){
      this.adminaddtouristform=new FormGroup({
        spotname:new FormControl(this.tourist.spotname,[
          Validators.required
        ]),
        spotlocation:new FormControl(this.tourist.spotlocation,[
          Validators.required
        ]),
        spotstate:new FormControl(this.tourist.spotstate,[
          Validators.required
        ]),
        imagetitle:new FormControl(this.tourist.imagetitle,[
          Validators.required
        ]),
        imagename:new FormControl(this.tourist.imagetitle,[
          Validators.required
        ])
      })
  }
  name:string=''
  getName(name:string){
    this.name=name;
  }
  addtourist(){
    this.submitted=true;
  
    if(this.adminaddtouristform.valid){
    }
    let currentspot={"spotname":this.adminaddtouristform.value.spotname,"spotlocation":this.adminaddtouristform.value.spotlocation,"spotstate":this.adminaddtouristform.value.spotstate,"imagetitle":this.adminaddtouristform.value.imagetitle,"imagename":this.adminaddtouristform.value.imagename};
    
    
    this.tourist.spotname=currentspot.spotname;
    this.tourist.spotlocation=currentspot.spotlocation;
    this.tourist.spotstate=currentspot.spotstate;
    this.tourist.imagetitle=currentspot.imagetitle;
    this.tourist.imagename=currentspot.imagename;
    if(currentspot.spotname=='' || currentspot.spotlocation==0 || currentspot.spotstate=='' || currentspot.imagetitle==''|| currentspot.imagename==0 ){
      this.errormsg="*";
    }
    // else if(currentspot.source==currentspot.destination){
    //   this.errordest="Give valid destination";
    // }
    // else if(currentspot.seatcapacity<currentspot.noofseats){
    //   this.errorcap="Give No of Seats greater than Seat capacity";
    // }
    else{
      this.touristserviceobj.createTouristSpots(this.tourist).subscribe(data=>{
        this.tourist=data;
        let formData=new FormData();
        formData.set("name",this.name);
        formData.set("file",this.file);
        this.route.navigateByUrl("/AdminTouristDetails");

      })
    }
   
  }
}

