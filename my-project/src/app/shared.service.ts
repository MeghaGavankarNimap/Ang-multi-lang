import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public translate: TranslateService,) { }

  setLanguage(lang:any) {
    this.translate.use(lang);
    //console.log(lang);
    //this.appService.language.subscribe(this.setLanguage);
    // this.languagService.changeCurrentLanguage(lang);
  }
}
