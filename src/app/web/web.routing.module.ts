import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then((m) => m.ExampleModule),
  },
  {
    path: '',
    component: WebComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutingModule {}
