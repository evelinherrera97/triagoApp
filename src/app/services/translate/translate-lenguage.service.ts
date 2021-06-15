import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslateLenguageService {

  private readonly defaultLanguage = 'es';
  private readonly supportedLanguages = ['es', 'en'];

  constructor(
    public translateService: TranslateService,
  ) { }

  public initTranslate() {
    this.translateService.setDefaultLang(this.defaultLanguage);
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang !== undefined && this.supportedLanguages.includes(browserLang)) {
    const browserLang = this.translateService.getBrowserLang();
      this.translateService.use(browserLang);
    } else {
      this.translateService.use(this.defaultLanguage)
    }
  }
}
