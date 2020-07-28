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
          import('./example/example-mobile/example-mobile.module').then(
            (m) => m.ExampleMobileModule
          ),
      },
      {
        path: 'internal',
        loadChildren: () =>
          import('./example/internal/internal-mobile/internal-mobile.module').then(
            (m) => m.InternalMobileModule
          ),
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
  private regexMobile = /mobile|android|iphone|ipad|ipod/i;
  private cache: boolean;

  constructor(private router: Router) {
    this.changeConfig(window.navigator.userAgent);
    this.checkDevice().subscribe((agent) => {
      this.changeConfig(agent);
    });
  }

  checkDevice() {
    return fromEvent(window, 'resize').pipe(
      map((event: EventWindow) => event.target.navigator.userAgent)
    );
  }

  changeConfig(agent: string) {
    const isMobile = this.regexMobile.test(agent);
    if (isMobile) {
      this.router.resetConfig(routesMobile);
    } else {
      this.router.resetConfig(routes);
    }

    if (this.cache !== isMobile) {
      if (typeof this.cache !== 'undefined') {
        // evita executar na inicializacao do router
        this.router.navigateByUrl(this.router.url);
      }
      this.cache = isMobile;
    }
  }
}

interface EventWindow extends Event {
  target: Window;
}
