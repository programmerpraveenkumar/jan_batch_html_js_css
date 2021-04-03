import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title:any
  content:any;
  img:any;
  constructor(private blog:BlogService) { }

  ngOnInit(): void {
  }
  selectFile(fileName){
    console.log(fileName);
    this.img = fileName;
  }
  savePost(){
    let formdatObj = new FormData();
    formdatObj.append("title",this.title);
    formdatObj.append("content",this.content);
    formdatObj.append("username","");
    formdatObj.append("category","testing");
    formdatObj.append("img",this.img[0],this.img[0].name);
    this.blog.post("blog/store",formdatObj).subscribe((res:any)=>{
      console.log(res);
    })
    //http://localhost:8082/
  }

}
