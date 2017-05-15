import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GlobalService } from '../shared/_services/index';
import {URLConfig } from '../shared/config-utils/index';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'cw-integration',
  templateUrl: 'integration.component.html',
  styleUrls: ['integration.component.scss']
})
export class IntegrationComponent implements OnInit{ 
  
  constructor() { }
 
    
  ngOnInit() { 
       
  }

}
