import { Component,OnInit, ElementRef ,ViewChild } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from 'src/Models/Booking';
import { BusDetail } from 'src/Models/BusDetail';
import { Customers } from 'src/Models/Customerss';
import { ActivatedRoute,Router } from '@angular/router';
import { BusdetailsService } from '../busdetails.service';
import { LoginService } from '../login.service';
import * as html2pdf from 'html2canvas';

import { jsPDF } from 'jspdf';
import { from } from 'rxjs';
 
@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent {
 @ViewChild('content',{static:false})el!:ElementRef;
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

  };

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
makepdf():void{
let pdf=new jsPDF('p','pt','a4');
pdf.html(this.el.nativeElement,{
  callback:(pdf)=>{
    pdf.save("ticket.pdf");
  }
});

}

}
