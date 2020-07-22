import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example.routing.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, ExampleRoutingModule],
})
export class ExampleModule {}
