import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HelperService } from '../helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit {
  serverResponse:any;
  colorClassName = 'red';
  isLogin = false;
  username = "";

  comments:any;
  num1:any;
  num2:any;
  customerDetails:any;
  showContent = true;
  result = "";
  posts:any;
  name = "sample value for name"
  person_name = "this is from home.component ts";
  person_city = "this city is from homne.component ts";
  student_name = "fita student name";
  persons = [1,2,3,2,4,5,6];//index array
  inputTxt = "";
  personDetail = [
    {"name":"abc","city":"person city1"},
    {"name":"test name2","city":"person city2"},
    {"name":"werwerwe","city":"person cit"},
    {"name":"hjkhjkghkj","city":"person cit"}
];
  constructor(private http: HttpClient,private helper:HelperService){
    console.log("home component constructor..")
    let usernameFromService = this.helper.getUserName()
    if(usernameFromService == "" || usernameFromService == undefined){
      this.username = "";
    }else{
      this.username = usernameFromService;
    }
    //promise and observable
    this.helper.getMethod ("../../assets/home.json").subscribe(
      response=>{
        console.log(response)
        this.posts = response;
       // console.log(response);
      })
      this.helper.getMethod ("https://jsonplaceholder.typicode.com/posts/").subscribe(
        response=>{
          this.posts = response;
         // console.log(response);
        })
      //   this.helper.getMethod ("../../assets/customer.json").subscribe(
      //     response=>{
      //       this.customerDetails = response;
      //     //  console.log(response);
      //  })
   }
   pushMessage(){
     this.helper.objSend.next("sample from home com");
   }
   updateService(){
     this.helper.updated('test ing');
     //console.log("updated..")
   }
   
  ngOnInit(): void {
  }
 
  sampleclickfunction(){
    this.helper.showAlert("this is sample alert "+this.name)
  }
add(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    this.helper.showAlert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)+parseInt(this.num2);
 // let ans = this.num1+this.num2;
  this.result = "addition value is  "+ ans;
  ;
}
changeColor(value){
  //can add condition..
  this.colorClassName = value;
}
sub(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    this.helper.showAlert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)-parseInt(this.num2);
  // let ans = this.num1+this.num2;
   this.result = "sub value is  "+ ans;
}
  
div(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    this.helper.showAlert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)/parseInt(this.num2);
  // let ans = this.num1+this.num2;
   this.result = "division value is  "+ ans;
}
mul(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    this.helper.showAlert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)*parseInt(this.num2);
  // let ans = this.num1+this.num2;
   this.result = "mul value is  "+ ans;
}

hide(){
  this.showContent = false;
}
show(){
this.showContent = true;
}

getDataFromapi(){
  this.personDetail = [
    {"name":"person dat afrom api","city":"person city1"},
    {"name":"person  dat afrom  name2","city":"person city2"},
    {"name":"person  dat afrom  name3","city":"person cit"}
];
}
}
