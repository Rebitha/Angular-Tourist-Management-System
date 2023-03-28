import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Customers } from '../../Models/Customerss';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  detail1:any;
 detail2:any;
  userform:FormGroup=new FormGroup({})
customers:Customers[]=[];




customer:Customers={
  customerid:0,
  customername:"",
  customermailid:"",
  customercontact:"",
  customerpassword:"",
  nationality:""
};
errormsg1="";
errormsg2="";
token:string="";
user:any;
flag_get=false;
flag=false;
constructor(private obj:LoginService,private route:Router){}
ngOnInit():void{
  this.userform=new FormGroup({
    Customermailid:new FormControl(this.customer.customermailid,[
      Validators.required,
      Validators.email
    ]),
    Customerpassword:new FormControl(this.customer.customerpassword,[
      Validators.required
    ])

  }
  )
}
SaveToken()
  {
    localStorage.setItem("token",this.token);
  }
  
  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('/Login');
  }

  getToken()
  {
    return localStorage.getItem("token")||'';
  }
login():void{
  let currentuser={"Customermailid":this.userform.value.Customermailid,"Customerpassword":this.userform.value.Customerpassword}

  this.obj.getAllUsers().subscribe(data=>{
    this.customers=data;
    this.flag_get=true;
    console.log(this.customers);
    console.log(currentuser.Customermailid);
this.user=this.customers.filter(x=>x.customermailid==currentuser.Customermailid && x.customerpassword==currentuser.Customerpassword);
this.detail1=this.customers.filter(x=>x.customermailid==currentuser.Customermailid);
this.detail2=this.customers.filter(x=>x.customerpassword==currentuser.Customerpassword);
console.log(this.user);

if(this.user.length>0){
  this.flag=true;
  this.token="validuser";
}
  if(this.token!="")
    {
    console.log("Entered tokennn");
    localStorage.setItem("token",this.token);
    localStorage.setItem("customerid",JSON.parse(this.user[0].customerid));

    this.route.navigateByUrl('/ViewTouristSpots',);
    }
    else{
      if(this.detail1.length<=0 && this.detail2.length<=0){
        this.errormsg1="Invalid Mail Id";
        this.errormsg2="Invalid Password";
      }
      else if(this.detail1.length<=0){
        this.errormsg1="Invalid Mail Id";
      }
      else if(this.detail2<=0){
        this.errormsg2="Invalid Password";

      }
      this.route.navigateByUrl('/Login');
    }

console.log(this.flag);
  })
}
}
