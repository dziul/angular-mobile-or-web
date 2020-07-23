import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { InternalMobileComponent } from './internal-mobile.component';

const routes: Routes = [
  {
    path: '',
    component: InternalMobileComponent,
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalRoutingMobileModule {}
