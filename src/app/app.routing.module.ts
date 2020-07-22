import { NgModule } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, Routes } from '@angular/router'; // CLI imports router

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private deviceChange: boolean;

  constructor(private router: Router) {
    this.changeConfig(Boolean(window.navigator.maxTouchPoints));
    this.checkDevice().subscribe((isMobile) => this.changeConfig(isMobile));
  }

  checkDevice() {
    return fromEvent(window, 'resize').pipe(
      map((event: EventWindow) => {
        return Boolean(event.target.navigator.maxTouchPoints);
      })
    );
  }

  changeConfig(isMobile: boolean) {
    if (isMobile) {
      this.router.resetConfig(routesMobile);
    } else {
      this.router.resetConfig(routes);
    }

    if (this.deviceChange !== isMobile) {
      if (typeof this.deviceChange !== 'undefined') {
        // evita executar na inicializacao do router
        this.router.navigateByUrl(this.router.url);
      }
      this.deviceChange = isMobile;
    }
  }
}

interface EventWindow extends Event {
  target: Window;
}
