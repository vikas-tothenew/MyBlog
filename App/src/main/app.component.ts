import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {LanguageListService} from './shared/_services/index';

import '../style/app.scss';

/**
 * This class represents the main application component.
 */
@Component({
  selector: 'cw-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
        
  

  constructor(translate: TranslateService, public languageListService:LanguageListService) {
        
        //Initializing the translate service
        // And setting the default language which will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en_au');
        
        // the lang to use
        translate.use('fr');
        translate.use('ar');
        translate.use('en');
  }
    
  ngOnInit() {
    this.languageListService.loadLanguageDetails();
  }
}
