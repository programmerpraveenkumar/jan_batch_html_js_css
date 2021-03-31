import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   blogData = [];
  constructor(private blog:BlogService) { }

  ngOnInit(): void {
    this.blog.get("blog/get/").subscribe((res:any)=>{
      this.blogData =  res;
    },error=>{
      this.blog.showAlert("Error in api call");
    })
  }

}
