import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { MobileComponent } from './mobile.component';

const routes: Routes = [
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then((m) => m.ExampleModule),
  },
  {
    path: '',
    component: MobileComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
