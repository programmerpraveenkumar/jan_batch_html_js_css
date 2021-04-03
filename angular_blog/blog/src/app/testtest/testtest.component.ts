import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testtest',
  templateUrl: './testtest.component.html',
  styleUrls: ['./testtest.component.css']
})
export class TesttestComponent implements OnInit {
 state = true;
 @Input() message;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log("change on canges.");
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
