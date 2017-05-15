import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './developer.component';
import { DeveloperRoutingModule } from './developer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, DeveloperRoutingModule, SharedModule],
  declarations: [DeveloperComponent],
  exports: [DeveloperComponent]
})
export class DeveloperModule { }
