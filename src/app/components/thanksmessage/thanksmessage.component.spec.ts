import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksmessageComponent } from './thanksmessage.component';

describe('ThanksmessageComponent', () => {
  let component: ThanksmessageComponent;
  let fixture: ComponentFixture<ThanksmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
