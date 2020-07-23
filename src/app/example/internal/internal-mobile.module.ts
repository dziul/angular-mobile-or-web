import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMobileModule } from 'src/app/shared/shared-mobile.module';

import { InternalMobileComponent } from './internal.component';
import { InternalRoutingMobileModule } from './internal.routing-mobile.module';

@NgModule({
  declarations: [InternalMobileComponent],
  imports: [CommonModule, InternalRoutingMobileModule, SharedMobileModule],
})
export class InternalMobileModule {}
