import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() color: string;
  @Input() text: string;
  @Input() isDisabled: boolean;
  @Input() type: string;
  @Output() clickButton = new EventEmitter<string>();

  constructor(
    public translateService: TranslateService,
  ) { }

  ngOnInit() {}

  callAction(){
    this.clickButton.emit();
  }

}
