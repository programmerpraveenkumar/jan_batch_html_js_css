import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//DRY->dont repeat yourself/
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public currentMenu = "";
  username = "";
  //object created for pub-sub
  //should be public.
  public objSend = new BehaviorSubject({});
  constructor(private http: HttpClient) { }
  showAlert(message){
    alert("Warning "+message);
  }
  updated(val){
    this.currentMenu =val;
  }
  setUserName(username){
    this.username = username;
  }
  getUserName(){
    return this.username;
  }
  createPromise(){
    return new Promise((res,rej)=>{
      //http call
      //timeless call.
      res("some resulst");//success 
     //rej("send error..");//fail

    })
}
  postMethod(url,req){
    //header
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json').set("user_id","");
    return this.http.post("http://localhost:8080/api/"+url,req)
  }
  getMethod(url){
    return this.http.get(url)
  }
}
