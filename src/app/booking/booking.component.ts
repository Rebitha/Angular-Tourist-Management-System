import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { BusdetailsService } from '../busdetails.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Booking } from 'src/Models/Booking';
import { BusDetail } from 'src/Models/BusDetail';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  seatserror:string="";
  dateerror:string="";
ngOnInit(): void {

  this.ticketform=new FormGroup({
    noofseats:new FormControl(this.ticket.noofseats,[
    ]),
    bookingdate:new FormControl(this.ticket.bookingdate,[
    ]),
  }
  );
  this.bookbus();

}
msg:string="";
busid:number=0;
ticketform:FormGroup=new FormGroup({});
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
}
ticket:Booking={
  bookingid:0,
  busid:0,
  noofseats:0,
  totalfare:0,
  customerid:0,
  bookingdate:"",
  bookingstatus:false,
  bus:{
    busid:0,
    busname:"",
    source:"",
    destination:"",
    noofseats:0,
    bustime:"",
    busfare:0,
    seatcapacity:0,
    bookings:[]
  }
}

constructor(private bookserviceobj:BookingService,private route:Router,private _Activatedroute:ActivatedRoute,private busserviceobj:BusdetailsService){}
bookticket(){
  
  let bookingdetail={"noofseats":this.ticketform.value.noofseats,"bookingdate":this.ticketform.value.bookingdate,"customerid":localStorage.getItem("customerid"),"busid":this.busid,"bookingstatus":true};
 {{debugger}}
  console.log(bookingdetail);
  this.ticket.bookingdate=bookingdetail.bookingdate;
  this.ticket.bookingstatus=true;
  this.ticket.busid=bookingdetail.busid;
  console.log(this.ticket)
  this.busserviceobj.getBusDetailsById(this.ticket.busid).subscribe(data=>{
    this.bus=data;
    const currentDate = new Date();
    const date=new Date(this.ticket.bookingdate);
   // console.log(currentDate.getDate());
    if(bookingdetail.noofseats<1){
      this.seatserror="Enter valid number of seats";
      {{debugger}}
      if(date.getTime()<=currentDate.getTime()){
        this.dateerror="Enter valid date";
      }
    }
    else if(bookingdetail.noofseats>this.bus.noofseats){
      this.seatserror="Only "+this.bus.noofseats+" are available";
      if(date.getTime()<=currentDate.getTime()){
        this.dateerror="Enter valid date";
      }
    }
   else if(date.getTime()<=currentDate.getTime()){
      this.dateerror="Enter valid date";
    }
    

    else{
      if(localStorage.getItem("customerid")!=null){
        this.ticket.customerid=Number.parseInt(localStorage.getItem("customerid")||'0',10);
    
      }
      this.ticket.noofseats=bookingdetail.noofseats;
    
      this.bookserviceobj.createBusDetails(this.ticket).subscribe(data=>{
       this.msg="Successfully created "+data.bookingid;
        console.log(data);
        this.ticket=data;
        console.log(this.ticket);
    this.route.navigateByUrl('/ViewSuccessBooking/'+ this.ticket.bookingid);
    
      });
    }
  })
  
  

}
bookbus(){
  this._Activatedroute.params.subscribe(params => { 
    this.busid = params['id']; 
    console.log(this.busid);
  });
}
}
