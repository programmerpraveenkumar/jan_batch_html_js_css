import { Component, OnInit } from '@angular/core';
import { trigger, state,style, animate, transition, keyframes } from '@angular/animations';
@Component({
  selector: 'app-keyframeanimation',
  templateUrl: './keyframeanimation.component.html',
  styleUrls: ['./keyframeanimation.component.css'],
  animations:[
    trigger('keyframes',[
      transition(':enter', [       
        animate('10s', keyframes([ 
          style({transform: 'translateX(0%)'}), 
          style({transform: 'translateX(100%)'}), 
        ])),
      ])      
    ])
  ]
})
export class KeyframeanimationComponent implements OnInit {
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      } ,1);
    } ,1000*10);
  }

}
