import { NgModule } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, Routes } from '@angular/router'; // CLI imports router

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./example/example.module').then((m) => m.ExampleModule),
      },
      {
        path: 'internal',
        loadChildren: () =>
          import('./example/internal/internal.module').then((m) => m.InternalModule),
      },
    ],
  },
]; // sets up routes constant where you define your routes

const routesMobile: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./example/example-mobile.module').then((m) => m.ExampleMobileModule),
      },
      {
        path: 'internal',
        loadChildren: () =>
          import('./example/internal/internal-mobile.module').then((m) => m.InternalMobileModule),
      },
    ],
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    const isMobile = window.navigator.maxTouchPoints || 'ontouchstart' in window;
    if (isMobile) {
      this.router.resetConfig(routesMobile);
    }
  }
}
