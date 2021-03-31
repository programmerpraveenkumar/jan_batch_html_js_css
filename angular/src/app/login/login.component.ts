import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  constructor(private router:Router,private helper:HelperService) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.username == "admin" && this.password == "admin"){
      //navigation to home component
      this.router.navigate(['home']);
      //update the value in the service.
      this.helper.setUserName("Fita student");
      //store the username
    }
    else{
      //show error.
      alert("error in username or password")
    }
  }
}
