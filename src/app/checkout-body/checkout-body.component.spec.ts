import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutBody } from './checkout-body.component';

describe('CheckoutBody', () => {
  let component: CheckoutBody;
  let fixture: ComponentFixture<CheckoutBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutBody],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
