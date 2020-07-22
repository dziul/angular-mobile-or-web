import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GoToService {
  constructor(private router: Router) {}

  goTo(path: string) {
    const device = window.navigator.maxTouchPoints ? 'mobile' : 'web';
    this.router.navigate([`/${device}/${path}`], { skipLocationChange: true });
  }
}
