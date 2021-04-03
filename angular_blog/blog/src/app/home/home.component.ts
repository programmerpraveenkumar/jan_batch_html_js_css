import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   blogData = [];
   category_name="";
   pageNO = 0;
  constructor(private blog:BlogService) { }

  ngOnInit(): void {
    this.getAllBLog();
  }
  getAllBLog(){
    this.blog.get("blog/get/").subscribe((res:any)=>{
      this.blogData =  res;
    },error=>{
      this.blog.showAlert("Error in api call");
    })
  }
  searchCategory(){
    if(this.category_name == ""){
      this.getAllBLog();
      return;
    }
    this.blog.get("blog/get/category?cat_name="+this.category_name).subscribe((res:any)=>{
      if(res.length == 0){
        alert("No Data found in this category");
      }
      this.blogData =  res;
    },error=>{
      this.blog.showAlert("Error in api call");
    })
  }
  pagination(type){
    if(type =="prev"){
      this.pageNO--;
      if(this.pageNO < 0){
        this.pageNO = 0;
      }
    }else {
      //next
      this.pageNO++;
    }
    console.log("current page no ",this.pageNO);
    //localhost:8082/blog/get/pagination?page_no
  }
  ngOnDestroy(){
    //oly will work with routerLink .
    console.log("ngOnDestroy home ");
  }
  //
}
