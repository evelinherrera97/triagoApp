import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {

  // @Input() info: any
  info:any

  constructor() { }

  ngOnInit() {
    this.info = [
     {
       type:'success',
       text: 'ok'
     },
     {
       type:'success',
       text: 'ok'
     } 
    ]
  }

}
