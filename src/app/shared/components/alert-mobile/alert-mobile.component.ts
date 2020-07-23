import { Component, Input, OnInit } from '@angular/core';

import { AlertType } from '../../models/alert.model';

@Component({
  selector: 'app-alert-mobile',
  templateUrl: './alert-mobile.component.html',
  styleUrls: ['./alert-mobile.component.scss'],
})
export class AlertMobileComponent implements OnInit {
  @Input() type: AlertType;

  @Input() hasButtonClosed: boolean;

  constructor() {}

  ngOnInit() {}
}
