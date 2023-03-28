import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Booking } from 'src/Models/Booking';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent {
  booking:Booking={
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
  };
  bookingid:number=0;
  constructor(private activroute: ActivatedRoute,private bokingserviceobj:BookingService,private route:Router){}
  ngOnInit(){
    this.activroute.params.subscribe(params=>{
      this.bookingid=params['id'];
      
      this.bokingserviceobj.getBookingDetailsById(this.bookingid).subscribe(data=>{
        this.booking=data;
      })
      

    })
  }
  MyBooking(id:number):void{
    this.bokingserviceobj.getBookingDetailsById(this.bookingid).subscribe(data=>{
      this.booking=data;
      this.bokingserviceobj.cancelBookingDetails(this.bookingid,this.booking).subscribe(data=>{
        this.booking=data;
        console.log(this.booking);
        this.route.navigateByUrl("/MyBookings");
        
      })

})
  }
}
