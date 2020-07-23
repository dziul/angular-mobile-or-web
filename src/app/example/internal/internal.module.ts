import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { InternalComponent } from './internal.component';
import { InternalRoutingModule } from './internal.routing.module';

@NgModule({
  declarations: [InternalComponent],
  imports: [CommonModule, InternalRoutingModule, SharedModule],
})
export class InternalModule {}
