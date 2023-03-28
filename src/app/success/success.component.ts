import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { BusdetailsService } from '../busdetails.service';
import { BookingService } from '../booking.service';
import { Customers } from '../../Models/Customerss';
import { BusDetail } from 'src/Models/BusDetail';
import { Booking } from 'src/Models/Booking';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  id:number=0;
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
  };
  customer:Customers={
    customerid:0,
    customername:"",
    customermailid:"",
    customercontact:"",
    customerpassword:"",
    nationality:""
  };
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

  constructor(private activroute: ActivatedRoute,private customerserviceobj:LoginService,private route:Router,private bookserviceobj:BookingService,private busserviceobj:BusdetailsService) { }
  ngOnInit() {
    this.activroute.params.subscribe(params => { 
 
      this.id = params['id']; 
      this.bookserviceobj.getBookingDetailsById(this.id).subscribe(data=>{
        this.ticket=data;
        console.log(this.ticket);
      
        this.busserviceobj.getBusDetailsById(this.ticket.busid).subscribe(data=>{
          this.bus=data;
          this.customerserviceobj.getCustomerDetailsById(this.ticket.customerid).subscribe(data=>{
            this.customer=data;
            console.log(this.bus);
            console.log(this.customer);
          })
        })
      });
    });

    

  }
  

}
