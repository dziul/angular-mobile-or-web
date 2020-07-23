import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { ExampleMobileComponent } from './example-mobile.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleMobileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingMobileModule {}
