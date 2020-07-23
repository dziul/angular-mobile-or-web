import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; // CLI imports router

import { ExampleComponent } from './example.component';

const routeCommon: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
];

const routes: Routes = [
  {
    path: 'internal',
    loadChildren: () => import('./internal/internal.module').then((m) => m.InternalModule),
  },
  ...routeCommon,
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {
  constructor(private route: Router) {
    console.log(this.route.config);
  }
}
