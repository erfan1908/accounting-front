import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoicesReturnComponent } from './purchase-invoices-return.component';

describe('PurchaseInvoicesReturnComponent', () => {
  let component: PurchaseInvoicesReturnComponent;
  let fixture: ComponentFixture<PurchaseInvoicesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseInvoicesReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseInvoicesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
