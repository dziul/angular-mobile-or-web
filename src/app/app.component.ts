import { Component, OnInit } from '@angular/core';

import { GoToService } from './shared/go-to.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private goToService: GoToService) {}

  ngOnInit() {
    this.goToService.goTo(''); // init
  }
}
