import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mobile="";
  password:any;
  constructor(private http: HttpClient,private helper:HelperService) {
    console.log("Contact component constructor..")
   }

  ngOnInit(): void {
  }
  submitForm(){
    var req = {
      "mobile":this.mobile,
      "password":this.password
  }
  //postMethod
  //post method will have two param->url,request param
  this.helper.postMethod("login/user",req) .subscribe(
    (res:any)=>{
        //success callback
      console.log("ok",res);
      alert("Login success "+res.user_profile_details.email);
      this.mobile = "";
      this.password = "";  
    },err=>{
      //error callback
      console.log("error",err);
      alert(err.error.message);
    }
  )}
  /*
  put->update
  delete->delete
  */

}
