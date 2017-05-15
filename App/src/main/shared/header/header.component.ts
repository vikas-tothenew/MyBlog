import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {LanguageListService} from '../_services/index';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'cw-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent { 
   
  public languages:string[];
  public languageDetailsLoaded:boolean = false;
  
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
  
  constructor(public translate: TranslateService,public languageListService:LanguageListService) {
     this.languages = translate.getLangs();
     this.checkIfLanguageDetailsLoaded();
  }
    
  public checkIfLanguageDetailsLoaded():void{
      let intervalId = setInterval(() => {  
          let status = this.languageListService.languageDetailsStatus();
          if(status!="loading" && status!="loaded"){
              clearInterval(intervalId);
              throw Error(status);
          }else if(status=="loaded"){
              clearInterval(intervalId);
              this.languageDetailsLoaded = true;    
          }
      }, 500);
  }
    
  public languageDetailsByLanguageCode(code:string):any{
      let details = this.languageListService.getLanguageDetailsByCode(code);
      return details;
  }
    
  public getCountryCode(code:string):string{
      let defaultCode = 'us';
      if(code){
          let c = code.split('_');
          if(c.length>1){
             return c[1].toLowerCase(); 
          }else{
             let details = this.languageDetailsByLanguageCode(code);
             if(details && details.countryCodes.length>0){
                 return details.countryCodes[0].toLowerCase();
             }
          }
      }
      return defaultCode;
  }
    
  public getLanguageName(code:string):string{
      let name = code;
      if(code){
          let details = this.languageDetailsByLanguageCode(code);
          if(details && details.name){
            return details.name;
          }
      }
      return name;
  }
  
  public changeLanguage(code:string):boolean{
      console.log("Changing Language ",code);
      this.translate.use(code);  
      return false;
  }
}