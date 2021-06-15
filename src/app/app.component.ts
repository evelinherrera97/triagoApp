import { Component } from '@angular/core';
import { TranslateLenguageService } from './services/translate/translate-lenguage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly translateLanguageService: TranslateLenguageService,
  ) {}

  ngOnInit() {
    this.translateLanguageService.initTranslate();
}

}
