import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeveloperComponent } from './developer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'developer', component: DeveloperComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
