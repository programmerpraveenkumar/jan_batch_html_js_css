import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-infscroll',
  templateUrl: './infscroll.component.html',
  styleUrls: ['./infscroll.component.css']
})
export class InfscrollComponent implements OnInit {
  dataArray=[];
  pageNo = 0;
  //htmlData="";
  htmlData:SafeHtml;
 
  constructor(private sanitizer: DomSanitizer) { 
   this.htmlData =  this.sanitizer.bypassSecurityTrustHtml("<h1>testing html from angular ts</h1>");
  // this.htmlData = "<h1>testing html from angular ts</h1>";
  }
  
 
  ngOnInit(): void {
    this.addDataArray();
  }
  addDataArray(){
    for(let i=0;i<100;i++){
        this.dataArray.push({"name":"page no is "+this.pageNo+"--"+i});
    }
  }
  onScroll(){
    if(this.pageNo >=5){
      return;
    }
    this.pageNo++;
    console.log("scroll over..",this.pageNo);
    this.addDataArray();//api call...
  }

}
