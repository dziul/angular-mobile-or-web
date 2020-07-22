import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example.routing.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, ExampleRoutingModule, SharedModule],
})
export class ExampleModule {}
