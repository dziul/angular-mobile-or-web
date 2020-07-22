import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MobileComponent } from './mobile.component';
import { MobileRoutingModule } from './mobile.routing.module';

@NgModule({
  declarations: [MobileComponent],
  imports: [CommonModule, MobileRoutingModule],
})
export class MobileModule {}
