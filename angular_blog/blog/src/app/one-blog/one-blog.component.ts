import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-one-blog',
  templateUrl: './one-blog.component.html',
  styleUrls: ['./one-blog.component.css']
})
export class OneBlogComponent implements OnInit {

  constructor(private routerObj: ActivatedRoute,private blog:BlogService) {
    this.routerObj.params.subscribe(pathParamObj=>{
      console.log(pathParamObj)
        this.getBlogContent(pathParamObj.id);
  
       })
   }

  ngOnInit(): void {
  }

  getBlogContent(blogId){
    this.blog.get("blog/get/id?id="+blogId).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
