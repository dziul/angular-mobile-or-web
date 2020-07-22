import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      const isMobile = window.navigator.maxTouchPoints;
      return isMobile
        ? import('./mobile/mobile.module').then((m) => m.MobileModule)
        : import('./web/web.module').then((m) => m.WebModule);
    },
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
