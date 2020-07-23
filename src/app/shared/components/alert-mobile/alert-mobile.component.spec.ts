import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMobileComponent } from './alert-mobile.component';

describe('AlertMobileComponent', () => {
  let component: AlertMobileComponent;
  let fixture: ComponentFixture<AlertMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
