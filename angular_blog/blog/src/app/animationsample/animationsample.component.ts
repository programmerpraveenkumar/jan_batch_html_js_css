import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animationsample',
  templateUrl: './animationsample.component.html',
  styleUrls: ['./animationsample.component.css'], 
   animations: [
      trigger('myanimation',[
         state('bottom',style({
            transform : 'translateX(500px)'
         })),
         state('top',style({
            transform : 'translateX(0px)'
         })),
         transition('bottom <=> top',animate('1500ms ease-in'))
      ])
   ]
})
export class AnimationsampleComponent implements OnInit {
  state: string = "bottom";
  constructor() { }

  ngOnInit(): void {
  }
  animate(){
    
    if(this.state == "bottom"){
      this.state = "top";
    }else{
      this.state = "bottom";
    }
  }
  ngDoCheck(){
    console.log("ngDoCheck testting"); 
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit testting"); 
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked testting"); 
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit testting"); 
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked testting"); 
  }
 
}
