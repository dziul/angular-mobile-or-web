import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMobileModule } from 'src/app/shared/shared-mobile.module';

import { InternalComponent } from './internal.component';

@NgModule({
  declarations: [InternalComponent],
  imports: [CommonModule, SharedMobileModule],
})
export class InternalMobileModule {}
