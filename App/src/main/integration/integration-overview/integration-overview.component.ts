import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GlobalService } from '../../shared/_services/index';
import {URLConfig } from '../../shared/config-utils/index';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'cw-integration-overview',
  templateUrl: 'integration-overview.component.html',
  styleUrls: ['integration-overview.component.scss']
})
export class IntegrationOverviewComponent implements OnInit{ 

  private categories:any;
  private errorMessage:any;
  
  constructor(public globalService:GlobalService) { }
 
    
  ngOnInit() { 
        this.loadCategories();
  }
   
  private loadCategories():void{
      this.globalService.getJson(URLConfig.INTEGERATION_CATEGORY_URL)
      .subscribe(
            detail => this.categories = detail,
            error => this.errorMessage = <any>error,
            () => console.log("Categories loaded ")
      );
  } 
}
