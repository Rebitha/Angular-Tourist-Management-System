import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTouristDetailsComponent } from './admin-tourist-details/admin-tourist-details.component';
import { AdminaddbusdetailsComponent } from './adminaddbusdetails/adminaddbusdetails.component';
import { AdminaddtouristComponent } from './adminaddtourist/adminaddtourist.component';
import { AdminauthguardGuard } from './adminauthguard.guard';
import { AdminbookingdetailsComponent } from './adminbookingdetails/adminbookingdetails.component';
import { AdmindeletebusdetailsComponent } from './admindeletebusdetails/admindeletebusdetails.component';
import { AdmineditbusdetailsComponent } from './admineditbusdetails/admineditbusdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminviewbusdetailsComponent } from './adminviewbusdetails/adminviewbusdetails.component';
import { AuthguardGuard } from './authguard.guard';
import { BookingComponent } from './booking/booking.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { CustomerPagesComponent } from './customer-pages/customer-pages.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { SuccessComponent } from './success/success.component';
import { TouristspotsComponent } from './touristspots/touristspots.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { VisitPageComponent } from './visit-page/visit-page.component';

const routes: Routes = [
  {path:'',component:VisitPageComponent},
  {path:'Login',component:CustomersComponent},
    {path:'ViewBusDetails/:id',component:BusdetailsComponent,canActivate:[AuthguardGuard]},
    {path:'BookNow/:id',component:BookingComponent,canActivate:[AuthguardGuard]},
    {path:'ViewSuccessBooking/:id',component:SuccessComponent,canActivate:[AuthguardGuard]},
    {path:'MyBookings',component:MyBookingsComponent,canActivate:[AuthguardGuard]},

{path:'ViewTouristSpots',component:TouristspotsComponent,canActivate:[AuthguardGuard]},
    {path:'CancelBooking/:id',component:CancelBookingComponent,canActivate:[AuthguardGuard]},
    {path:'Viewticket/:id',component:ViewticketComponent,canActivate:[AuthguardGuard]},
  {path:'RegisterUser',component:RegistercustomerComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'Home',component:HomeComponent,canActivate:[AdminauthguardGuard]},
  {path:'AdminBookingDetails',component:AdminbookingdetailsComponent,canActivate:[AdminauthguardGuard]},
  {path:'ViewBusDetailsAdmin',component:AdminviewbusdetailsComponent,canActivate:[AdminauthguardGuard]},
  {path:'AdminAddBusDetails',component:AdminaddbusdetailsComponent,canActivate:[AdminauthguardGuard]},
  {path:'AdminDeleteBus/:id',component:AdmindeletebusdetailsComponent,canActivate:[AdminauthguardGuard]},
  {path:'AdminEditBusDetails/:id',component:AdmineditbusdetailsComponent,canActivate:[AdminauthguardGuard]},
  {path:'AdminTouristDetails',component:AdminTouristDetailsComponent,canActivate:[AdminauthguardGuard]},
  {path:'AdminAddTourist',component:AdminaddtouristComponent,canActivate:[AdminauthguardGuard]}
  

 
  //{path:'VisitSite',component:VisitPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  VisitPageComponent,
  CustomersComponent,
  CustomerPagesComponent,
  TouristspotsComponent,
  BusdetailsComponent,
  BookingComponent,
  SuccessComponent,
  MyBookingsComponent,
  CancelBookingComponent,
  ViewticketComponent
];
