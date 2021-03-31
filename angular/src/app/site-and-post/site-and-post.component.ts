import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-site-and-post',
  templateUrl: './site-and-post.component.html',
  styleUrls: ['./site-and-post.component.css']
})
export class SiteAndPostComponent implements OnInit {
  posts:any;
  
@Output() toParent = new EventEmitter();
  constructor(private helper:HelperService) { 
    this.helper.getMethod ("../../assets/ads.json").subscribe(
      response=>{
       
        this.posts = response;
       // console.log(response);
      })
  }
  sendToAppcomponent(){
     this.toParent.emit("from site and post component");
   }
  ngOnInit(): void {
  }

}
