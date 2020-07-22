import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoToDirective } from './go-to.directive';

@NgModule({
  declarations: [GoToDirective],
  exports: [GoToDirective],
  imports: [CommonModule],
})
export class SharedModule {}
