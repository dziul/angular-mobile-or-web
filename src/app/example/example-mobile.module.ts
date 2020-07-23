import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMobileModule } from '../shared/shared-mobile.module';
import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example.routing.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, ExampleRoutingModule, SharedMobileModule],
})
export class ExampleMobileModule {}
