import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule }
    from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { TouristspotsComponent } from './touristspots/touristspots.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { AdminModule } from './admin/admin.module';
import { BookingComponent } from './booking/booking.component';
import { SuccessComponent } from './success/success.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { CommonModule } from '@angular/common';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import jsPDF from 'jspdf';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { CustomerPagesComponent } from './customer-pages/customer-pages.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminbookingdetailsComponent } from './adminbookingdetails/adminbookingdetails.component';
import { AdminviewbusdetailsComponent } from './adminviewbusdetails/adminviewbusdetails.component';
import { AdminaddbusdetailsComponent } from './adminaddbusdetails/adminaddbusdetails.component';
import { AdmindeletebusdetailsComponent } from './admindeletebusdetails/admindeletebusdetails.component';
import { AdmineditbusdetailsComponent } from './admineditbusdetails/admineditbusdetails.component';
import { CustomerfooterComponent } from './customerfooter/customerfooter.component';
import { spotlocationfilterPipe } from './touristspots/tourist-file-pipe';
import { AdminTouristDetailsComponent } from './admin-tourist-details/admin-tourist-details.component';
import { AdminaddtouristComponent } from './adminaddtourist/adminaddtourist.component';
@NgModule({
  declarations: [
    AppComponent,
    TouristspotsComponent,
    CustomersComponent,
    BusdetailsComponent,
    BookingComponent,
    SuccessComponent,
    MyBookingsComponent,
    CancelBookingComponent,
    ViewticketComponent,
    VisitPageComponent,
    CustomerPagesComponent,
    RegistercustomerComponent,
    AdminloginComponent,
    HomeComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminbookingdetailsComponent,
    AdminviewbusdetailsComponent,
    AdminaddbusdetailsComponent,
    AdmindeletebusdetailsComponent,
    AdmineditbusdetailsComponent,
    CustomerfooterComponent,
    spotlocationfilterPipe,
    AdminTouristDetailsComponent,
    AdminaddtouristComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelModule,
    ReactiveFormsModule,
    MenubarModule,
    HttpClientModule,
    AdminModule,
    CommonModule,
  

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
