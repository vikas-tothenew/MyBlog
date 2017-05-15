import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationComponent } from './integration.component';
import { IntegrationOverviewComponent } from './integration-overview/integration-overview.component';
import { IntegrationDetailComponent } from './integration-detail/integration-detail.component';
import { CategoryPortfolioComponent } from './integration-overview/category-portfolio/category-portfolio.component';
import { ItemPreviewComponent } from './integration-overview/category-portfolio/item-preview/item-preview.component';
import { IntegrationRoutingModule } from './integration-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, IntegrationRoutingModule, SharedModule],
  declarations: [IntegrationComponent,IntegrationOverviewComponent,IntegrationDetailComponent,CategoryPortfolioComponent,ItemPreviewComponent],
  exports: [IntegrationComponent]
})
export class IntegrationModule { }
