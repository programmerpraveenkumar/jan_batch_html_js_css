import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input()  =>get value from parent.
  username:any;
  isLogin=false;
 @Input() currentMenu;
 fromService;
  constructor(private helper:HelperService,private router:Router) {
    console.log(this.currentMenu);
    let usernameFromService = this.helper.getUserName()
    if(usernameFromService == "" || usernameFromService == undefined){
      this.username = "";
      this.isLogin = false;
    }else{
      this.username = usernameFromService;
      this.isLogin = true
    }
    this.helper.objSend.subscribe(res=>{
      console.log("from subscribe in header ",res);
    })
    //.fromService= this.helper.currentMenu
   }

  ngOnInit(): void {
  }
  logout(){
    //need to go to login page
    //change the status;
    this.isLogin = false;
    this.router.navigate(['login']);
    
  }
  checkUPdate(){
    console.log(this.helper.currentMenu)
  }

}
