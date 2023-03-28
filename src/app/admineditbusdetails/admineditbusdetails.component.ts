import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BusdetailsService } from '../busdetails.service';
import { ActivatedRoute, Route,Router } from '@angular/router';
import { BusDetail } from 'src/Models/BusDetail';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-admineditbusdetails',
  templateUrl: './admineditbusdetails.component.html',
  styleUrls: ['./admineditbusdetails.component.css']
})
export class AdmineditbusdetailsComponent {
  busid=0
  errordest=""
  errorcap=""
  id=0;
  errormsg="";
  constructor(private busserviceobj:BusdetailsService,private route:Router,private _Activatedroute:ActivatedRoute){}
  submitted=false;
  adminaddbusform:FormGroup=new FormGroup({})
  bus:BusDetail={
    busid:0,
      busname:"",
      source:"",
      destination:"",
      noofseats:0,
      bustime:"",
      busfare:0,
      seatcapacity:0,
      bookings:[]
  };
  bus1:BusDetail={
    busid:0,
      busname:"",
      source:"",
      destination:"",
      noofseats:0,
      bustime:"",
      busfare:0,
      seatcapacity:0,
      bookings:[]
  };

    ngOnInit(){
      this._Activatedroute.params.subscribe(params=>{
        this.busid = params['id'];
        this.busserviceobj.getBusDetailsById(this.busid).subscribe(data=>{
          this.bus=data;
        }) 
      })
    this.adminaddbusform=new FormGroup({

      

      busname:new FormControl(this.bus.busname,[
        Validators.required
      ]),
      source:new FormControl(this.bus.source,[
        Validators.required
      ]),
      destination:new FormControl(this.bus.destination,[
        Validators.required
      ]),
      noofseats:new FormControl(this.bus.noofseats,[
        Validators.required
      ]),
      bustime:new FormControl(this.bus.bustime,[
        Validators.required
      ]),
      busfare:new FormControl(this.bus.busfare,[
        Validators.required
      ]),
      seatcapacity:new FormControl(this.bus.seatcapacity,[
        Validators.required
      ])
    })
  }
  addbus(){
    this.submitted=true;
  
    if(this.adminaddbusform.valid){
    }
    let currentbus={"busname":this.adminaddbusform.value.busname,"source":this.adminaddbusform.value.source,"destination":this.adminaddbusform.value.destination,"noofseats":this.adminaddbusform.value.noofseats,"bustime":this.adminaddbusform.value.bustime,"busfare":this.adminaddbusform.value.busfare,"seatcapacity":this.adminaddbusform.value.seatcapacity};
    
    
    this.bus.busname=currentbus.busname;
    this.bus.source=currentbus.source;
    this.bus.destination=currentbus.destination;
    this.bus.noofseats=currentbus.noofseats;
    this.bus.bustime=currentbus.bustime;
    this.bus.busfare=currentbus.busfare;
    this.bus.seatcapacity=currentbus.seatcapacity;
    if(currentbus.busname=='' || currentbus.busfare==0 || currentbus.bustime=='' || currentbus.destination==''|| currentbus.noofseats==0 || currentbus.seatcapacity==0 || currentbus.source==''){
      this.errormsg="*";
    }
    else if(currentbus.source==currentbus.destination){
      this.errordest="Give valid destination";
    }
    else if(currentbus.seatcapacity<currentbus.noofseats){
      this.errorcap="Give No of Seats greater than Seat capacity";
    }
    else{
      this.busserviceobj.updateBusDetails(this.bus.busid,this.bus).subscribe(data=>{
        this.bus=data;
        this.route.navigateByUrl("/ViewBusDetailsAdmin");
      })
    }
    
   
  }



}
