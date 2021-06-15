import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() color: string;
  @Input() text: any;
  @Input() isDisabled: boolean;

  constructor(
    public translateService: TranslateService,
  ) { }

  ngOnInit() {}

  callAction(){}

}
