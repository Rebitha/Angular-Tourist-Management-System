import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customers } from 'src/Models/Customerss';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent {
  errormsg="";
  errormsgname=""
  customer:Customers={
    customerid:0,
  customername:"",
  customermailid:"",
  customercontact:"",
  customerpassword:"",
  nationality:""
  }
  customer1:Customers[]=[]
  customers:Customers[]=[];
  submitted:boolean=false;
  confirmpassword:string="";
  registerform:FormGroup=new FormGroup({});
  constructor(private customerserviceobj:LoginService,private route:Router){}
  ngOnInit(){
    this.submitted = false;
    this.registerform=new FormGroup({
      Customername:new FormControl(this.customer.customername,[
        Validators.required,Validators.pattern('[a-zA-Z]*')
      ]),
      Customermailid:new FormControl(this.customer.customermailid,[
        Validators.required
      ]),
      Customercontact:new FormControl(this.customer.customercontact,[
        Validators.required
      ]),
      Customerpassword:new FormControl(this.customer.customerpassword,[
        Validators.required
      ]),
      ConfirmPassword:new FormControl(this.confirmpassword,[
        Validators.required
      ]),
      Nationality:new FormControl(this.customer.nationality,[
        Validators.required
      ])
    });

  }
register(){
  this.submitted=true;

  if(this.registerform.valid){
  }
  let user={"customername":this.registerform.value.Customername,"customermailid":this.registerform.value.Customermailid,"customerpassword":this.registerform.value.Customerpassword,"confirmpassword":this.registerform.value.ConfirmPassword,"customercontact":this.registerform.value.Customercontact,"nationality":this.registerform.value.Nationality};
  
  
  this.customer.customername=user.customername;
  this.customer.customermailid=user.customermailid;
  this.customer.customerpassword=user.customerpassword;
  this.customer.customercontact=user.customercontact;
  this.customer.nationality=user.nationality;
  this.customerserviceobj.getAllUsers().subscribe(data=>{
    this.customers=data;
    this.customer1=this.customers.filter(x=>x.customermailid==this.customer.customermailid);
    if(user.customername=="" || user.customermailid=="" || user.customercontact=="" || user.customerpassword==""|| user.confirmpassword=="" || user.nationality==""){
    //  this.errormsg="*";
      
    }
    else if(this.customer1.length>0){
      this.errormsg="Mail Id already exists";
    }
    else if(user.confirmpassword!=user.customerpassword){
      this.errormsgname="Password Mismatch";
    }
    else{
      this.customerserviceobj.createCustomerDetails(this.customer).subscribe(data=>{
        this.customer=data;
  
        console.log(this.customer);
        this.route.navigateByUrl("/Login");
        
      })
    }
    
  })
}
}
