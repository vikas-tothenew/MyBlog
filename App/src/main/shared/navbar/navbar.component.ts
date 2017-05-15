import { Component, ElementRef, ViewChild  } from '@angular/core';
import {TranslateService,LangChangeEvent} from '@ngx-translate/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'cw-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavbarComponent {
    
  constructor(private translate: TranslateService,private el:ElementRef) {

  }
    
  ngAfterViewInit() {
    
  }
  
  onResize(event) {
    
  }
}
