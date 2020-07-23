import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { InternalComponent } from './internal.component';

@NgModule({
  declarations: [InternalComponent],
  imports: [CommonModule, SharedModule],
})
export class InternalModule {}
