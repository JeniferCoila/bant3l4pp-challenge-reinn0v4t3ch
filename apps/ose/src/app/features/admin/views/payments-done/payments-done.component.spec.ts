import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsDoneComponent } from './payments-done.component';

describe('PaymentsDoneComponent', () => {
  let component: PaymentsDoneComponent;
  let fixture: ComponentFixture<PaymentsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
