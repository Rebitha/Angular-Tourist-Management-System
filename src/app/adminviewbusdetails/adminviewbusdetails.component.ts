import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BusDetail } from 'src/Models/BusDetail';
import { BusdetailsService } from '../busdetails.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminviewbusdetails',
  templateUrl: './adminviewbusdetails.component.html',
  styleUrls: ['./adminviewbusdetails.component.css']
})
export class AdminviewbusdetailsComponent {
  constructor(private busserviceobj:BusdetailsService,private route:Router){}
  buslist:BusDetail[]=[];
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
  errormsg=""
ngOnInit(){
  this.busserviceobj.getAllBusDetails().subscribe(data=>{
    this.buslist=data;
    console.log(this.buslist)
   // this.busserviceobj.getBusDetailsById(this.my)

  })
}
dlt(busid:number){
  const confirmed = window.confirm('Are you sure you want to delete this item?');
  if (confirmed) {
    // Perform delete action here
    console.log('Item deleted');
    this.busserviceobj.getBusDetailsById(busid).subscribe(data=>{
      this.bus=data;
      if(this.bus.seatcapacity>=this.bus.noofseats){
        this.busserviceobj.deleteBusDetails(busid).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 404) {
              console.log('Data not found');
              alert("Sry the bus is booked so you cannot dlt this item !");
            }
            return throwError('Something went wrong');
          })
        ).subscribe(data=>{
          console.log("deleted");
          this.route.navigateByUrl("/ViewBusDetailsAdmin");
        })
      }
      else{
        alert("Sry the bus is booked so you cannot dlt this item !");

      }
    })
  } else {
    // Cancel delete action or do something else
    console.log('Delete action canceled');
    

    
  }
}
}
