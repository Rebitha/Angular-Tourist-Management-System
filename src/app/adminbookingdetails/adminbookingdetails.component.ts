import { Component } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from 'src/Models/Booking';
@Component({
  selector: 'app-adminbookingdetails',
  templateUrl: './adminbookingdetails.component.html',
  styleUrls: ['./adminbookingdetails.component.css']
})
export class AdminbookingdetailsComponent {
 
  constructor(private bookingserviceobj:BookingService){}
  mybookingslist:Booking[]=[];
ngOnInit(){
  this.bookingserviceobj.getAllBookingDetails().subscribe(data=>{
    this.mybookingslist=data;
   // this.busserviceobj.getBusDetailsById(this.my)

  })
}
}
