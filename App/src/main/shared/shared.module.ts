import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
//import { TranslateService } from '@ngx-translate/core';

import { AppSettings, URLConfig } from './config-utils/index';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageListService, GlobalService } from './_services/index';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,TranslateModule,AlertModule,BsDropdownModule],
  declarations: [HeaderComponent, NavbarComponent, FooterComponent],
  exports: [HeaderComponent, NavbarComponent, FooterComponent,
    CommonModule, FormsModule, RouterModule, TranslateModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LanguageListService,GlobalService,AppSettings,URLConfig]
    };
  }
}
