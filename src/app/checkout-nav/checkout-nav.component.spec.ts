import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutNav } from './checkout-nav.component';

describe('CheckoutNav', () => {
  let component: CheckoutNav;
  let fixture: ComponentFixture<CheckoutNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutNav],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
