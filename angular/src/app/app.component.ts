import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1:any;
  num2:any;
  showContent = false;
  result = "";
  name = "sample value for name"
  person_name = "this is from app.component ts";
  person_city = "this city is from app.component ts";
  student_name = "fita student name";
  persons = [1,2,3,2,4,5,6];//index array
  personDetail = [
    {"name":"person name1","city":"person city1"},
    {"name":"person name2","city":"person city2"},
    {"name":"person name3","city":"person cit"}
];
  sampleclickfunction(){
    alert("this is sample alert "+this.name)
  }
  sendDaTa($event){
    console.log("recvd in parent compeontn",$event);
  }
add(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    alert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)+parseInt(this.num2);
 // let ans = this.num1+this.num2;
  this.result = "addition value is  "+ ans;
  ;
}
sub(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    alert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)-parseInt(this.num2);
  // let ans = this.num1+this.num2;
   this.result = "sub value is  "+ ans;
}
  
div(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    alert("should be number...")
    return;
  }
  let ans = parseInt(this.num1)/parseInt(this.num2);
  // let ans = this.num1+this.num2;
   this.result = "division value is  "+ ans;
}
mul(){
  if(isNaN(this.num1) || isNaN(this.num2)){
    alert("should be number...")
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
