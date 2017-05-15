import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../shared/_services/index';
import { URLConfig } from '../../shared/config-utils/index';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'cw-integration-detail',
  templateUrl: 'integration-detail.component.html',
  styleUrls: ['integration-detail.component.scss']
})
export class IntegrationDetailComponent implements OnInit{ 

  private integrationID: number;
  private errorMessage: any;
  private integrationDetail:any = {content:''};
  
  constructor(private router: Router,private route: ActivatedRoute,public globalService:GlobalService) { 
    this.integrationID = +route.snapshot.params['id']; //+ converts string to integer
  }
 
    
  ngOnInit() { 
      this.globalService.getJson(URLConfig.INTEGERATION_DETAILS_URL)
      .subscribe(
            detail => this.setIntegrationDetail(detail),
            error => this.errorMessage = <any>error,
            () => console.log("Categories loaded ")
      );
  }
  
  setIntegrationDetail(categories:any):void{
      //Temporarily finding the integration details from the categories data
      let found:boolean = false;
      for(let category of categories){
        for(let integration of category.integrations){
            if(integration.id == this.integrationID){
              this.integrationDetail = integration;
              found = true;
              break;
            }
        }
        if(found){
          break;
        }
      }
  }
}
