import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntegrationComponent } from './integration.component';
import { IntegrationOverviewComponent } from './integration-overview/integration-overview.component';
import { IntegrationDetailComponent } from './integration-detail/integration-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: IntegrationComponent, 
      	children: [
	      { path: '', component: IntegrationOverviewComponent },
          { path: ':id', component: IntegrationDetailComponent }
	    ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
