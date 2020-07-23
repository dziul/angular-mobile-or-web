import { Component } from '@angular/core';

import { ExampleComponent } from '../example.component';

@Component({
  selector: 'app-example',
  templateUrl: '../example.component.html',
  styleUrls: ['../example.component.scss'],
})
export class ExampleMobileComponent extends ExampleComponent {}
