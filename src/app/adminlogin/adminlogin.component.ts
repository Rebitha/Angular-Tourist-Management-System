import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Admin } from 'src/Models/Admin';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminloginService } from '../adminlogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  errormsg1=""
  errormsg2=""
  
  flag=false;
  token=""
  flag_get=false;
  admin:Admin={
    adminid:0,
    adminname:"",
    adminmail:"",
    adminpassword:"",
    admincontact:""
  }
  admins:Admin[]=[]
  adminlist:Admin[]=[]
  details1:Admin[]=[]

  details2:Admin[]=[]

adminloginform:FormGroup=new FormGroup({})
ngOnInit(){
  this.adminloginform=new FormGroup({
    adminmailid:new FormControl(this.admin.adminmail,[
      Validators.required
    ]),
    adminpassword:new FormControl(this.admin.adminpassword,[
      Validators.required
    ])
  })
}

constructor(private obj:AdminloginService,private route:Router){}

login():void{
  let currentuser={"adminmail":this.adminloginform.value.adminmailid,"adminpassword":this.adminloginform.value.adminpassword}

  this.obj.getAllAdmins().subscribe(data=>{
    this.admins=data;
    this.flag_get=true;
    console.log(this.admins);
    console.log(currentuser.adminmail);
this.adminlist=this.admins.filter(x=>x.adminmail==currentuser.adminmail && x.adminpassword==currentuser.adminpassword);
this.details1=this.admins.filter(x=>x.adminmail==currentuser.adminmail);
this.details2=this.admins.filter(x=>x.adminpassword==currentuser.adminpassword);
console.log(this.admins);
if(this.adminlist.length>0){
  this.flag=true;
  this.token="validuser";
}
  if(this.token!="")
    {
    console.log("Entered tokennn");
    localStorage.setItem("token",this.token);
   // localStorage.setItem("adminid",JSON.parse(this.admins[0].adminmail));

    this.route.navigateByUrl('/Home',);
    }
    else{
      if(this.details1.length<=0 && this.details2.length<=0){
        this.errormsg1="Invalid Mail Id";
        this.errormsg2="Invalid Password";
      }
      else if(this.details1.length<=0){
        this.errormsg1="Invalid Mail Id";
      }
      else if(this.details2.length<=0){
        this.errormsg2="Invalid Password";

      }
      this.route.navigateByUrl('/AdminLogin');
    }

console.log(this.flag);
  })
}







}
