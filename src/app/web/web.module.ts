import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WebComponent } from './web.component';
import { WebRoutingModule } from './web.routing.module';

@NgModule({
  declarations: [WebComponent],
  imports: [CommonModule, WebRoutingModule],
})
export class WebModule {}
