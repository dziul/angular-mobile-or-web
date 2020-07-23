import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertMobileModule } from './components/alert-mobile/alert-mobile.module';
import { AlertComponent } from './components/mobile/alert/alert.component';

const components = [AlertComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, AlertMobileModule],
  exports: [...components],
})
export class SharedMobileModule {}
