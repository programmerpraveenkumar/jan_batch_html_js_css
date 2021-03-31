import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private helper:HelperService) { 
    this.helper.objSend.subscribe(res=>{
      console.log("from subscribe in footer ",res);
    })
  }

  ngOnInit(): void {
  }

callPromise(){
  this.helper.createPromise().then(r=>{
    console.log("Success ",r);
  },error=>{
    console.log("Error ",error);
  })
}
createObservable(){
  return new Observable(res=>{
    //http call
      //timeless call.
    res.next("from observable...");//success 
    res.next("from observable 2...");//success 
    res.error("some error");//fail
  })
}
callObservable(){
  this.createObservable().subscribe(res=>{
    console.log(res);
  },error=>{
    console.log(error);
  });
}
}
