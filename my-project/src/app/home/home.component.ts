import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  langValue='en';
  availableLanguages!: { code: string; name: string; }[] ;
  currentLanguage:any
  

  constructor(public translate:TranslateService){
   let  langValue = 'en';
    // this.currentLanguage = this.TranslateService.currentLang;
    this.availableLanguages = [
      { code: 'en', name: 'English' },
      { code: 'mr', name: 'Marathi' },
      { code: 'hi', name: 'Hindi' },
      
    ];
  }
  ngOnInit(){
    this.translate.setDefaultLang(this.langValue)
    this.translate.use(this.langValue)
  }

  changeLanguage(event:any){
  const langCode = (event.target as HTMLInputElement)?.value;
  this.langValue = langCode;
  this.translate.use(this.langValue)
  // this.TranslateService.setLanguage(this.langValue)


  }

}
