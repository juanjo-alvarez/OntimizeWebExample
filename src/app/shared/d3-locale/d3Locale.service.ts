import { Injectable } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { D3Locales } from './locales';

declare var d3: any;

@Injectable({
  providedIn: 'root'
})
export class D3LocaleService {

  constructor(
    private translateService: OTranslateService
  ) { }

  public getD3LocaleConfiguration(): any {
    let lang = this.translateService.getCurrentLang().toUpperCase();
    let localeData = D3Locales[lang]
    return d3.locale(localeData);
  }

}