import { Component } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from 'src/Models/Booking';
import { BusdetailsService } from '../busdetails.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  id:number=0;
  constructor(private bookingserviceobj:BookingService,private busserviceobj:BusdetailsService){}
  mybookingslist:Booking[]=[];
ngOnInit(){
  this.id=Number.parseInt(localStorage.getItem("customerid")||'0',10);
  this.bookingserviceobj.getBookingByCustomerId(this.id).subscribe(data=>{
    this.mybookingslist=data;
   // this.busserviceobj.getBusDetailsById(this.my)

  })
}
}
