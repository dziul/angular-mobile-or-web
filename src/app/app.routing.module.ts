import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./web/web.module').then((m) => m.WebModule),
  },
]; // sets up routes constant where you define your routes

const routesMobile: Routes = [
  {
    path: '',
    loadChildren: () => import('./mobile/mobile.module').then((m) => m.MobileModule),
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    if (window.navigator.maxTouchPoints) {
      this.router.resetConfig(routesMobile);
    }
  }
}
