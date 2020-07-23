import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { ExampleRoutingModule } from './example.routing.module';
import { SharedWebModule } from 'src/app/shared/shared-web.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, ExampleRoutingModule, SharedWebModule],
})
export class ExampleModule {}
