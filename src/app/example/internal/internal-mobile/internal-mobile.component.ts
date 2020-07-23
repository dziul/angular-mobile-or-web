import { Component } from '@angular/core';

import { InternalComponent } from '../internal.component';

@Component({
  selector: 'app-internal',
  templateUrl: '../internal.component.html',
  styleUrls: ['../internal.component.scss'],
})
export class InternalMobileComponent extends InternalComponent {}
