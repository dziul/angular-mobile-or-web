import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './components/mobile/alert/alert.component';

const components = [AlertComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class SharedMobileModule {}
