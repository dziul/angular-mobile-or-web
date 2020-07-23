import { Component, Input, OnInit } from '@angular/core';

import { AlertType } from 'src/app/shared/models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() showClose = true;
  @Input() is: AlertType;

  constructor() {}

  ngOnInit() {}
}
