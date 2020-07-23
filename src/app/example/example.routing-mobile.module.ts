import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { ExampleMobileComponent } from './example.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleMobileComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingMobileModule {}
