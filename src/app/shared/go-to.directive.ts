import { Directive, HostListener, Input } from '@angular/core';

import { GoToService } from './go-to.service';

@Directive({
  selector: '[appGoTo]',
})
export class GoToDirective {
  @Input('appGoTo') path: string;

  constructor(private goToService: GoToService) {}

  @HostListener('click') onClick() {
    this.goToService.goTo(this.path);
  }
}
