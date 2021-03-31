import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
 BASE_URL= "http://localhost:8082/";
  constructor(private http:HttpClient) { }
  get(url){
    return this.http.get(this.BASE_URL+url);
  }
  post(url,data){
    return this.http.post(this.BASE_URL+url,data);
  }
  showAlert(message){
    alert(message);
  }

}
