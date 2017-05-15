import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HttpInterceptor } from './http-interceptor';
import { AppErrorHandler } from './error-handler';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './i18n.providers';
//import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IntegrationModule } from './integration/integration.module';
import { DeveloperModule } from './developer/developer.module';
import { FaqModule } from './faq/faq.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2Webstorage } from 'ng2-webstorage';

@NgModule({
  imports: [
    BrowserModule, 
    //BrowserAnimationsModule,
    HttpModule, 
    AppRoutingModule, 
    IntegrationModule, 
    DeveloperModule, 
    FaqModule, 
    HomeModule,
    Ng2Webstorage,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
    }),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    {
        provide: APP_BASE_HREF,
        useValue: ''
    },
    {
        provide: ErrorHandler,
        useClass: AppErrorHandler
    },
    {
        provide: Http,
        useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
        deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
