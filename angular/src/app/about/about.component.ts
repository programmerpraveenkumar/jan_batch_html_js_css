
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  comments:any;

  //object creation for activatedroute for accessing the path param or route parameter..
  constructor(private routerObj: ActivatedRoute,private http: HttpClient,private helper:HelperService) {
    console.log("About componentz constructor..")
    //below is observable..when param is ready.it will get executed.
     this.routerObj.params.subscribe(pathParamObj=>{
    //   console.log("PostId ",pathParamObj.post_id);
    //   //()
     this.getComments(pathParamObj.post_id);


     })
   // this.getComments(10)
   }

   showAlert(){
     this.helper.showAlert("this is simpe alert from about component");
   }
   getComments(post_id){
    this.http.get("https://jsonplaceholder.typicode.com/posts/"+post_id+"/comments").subscribe(
      response=>{
        this.comments = response;
        console.log(response);
      })
   }
  ngOnInit(): void {
  }

}
