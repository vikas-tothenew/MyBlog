import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [CommonModule, FaqRoutingModule, SharedModule, AccordionModule],
  declarations: [FaqComponent],
  exports: [FaqComponent]
})
export class FaqModule { }
