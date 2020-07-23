import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMobileModule } from 'src/app/shared/shared-mobile.module';

import { ExampleMobileComponent } from './example-mobile.component';
import { ExampleRoutingMobileModule } from './example.routing-mobile.module';

@NgModule({
  declarations: [ExampleMobileComponent],
  imports: [CommonModule, ExampleRoutingMobileModule, SharedMobileModule],
})
export class ExampleMobileModule {}
