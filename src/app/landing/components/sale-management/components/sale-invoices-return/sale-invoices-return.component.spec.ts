import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInvoicesReturnComponent } from './sale-invoices-return.component';

describe('SaleInvoicesReturnComponent', () => {
  let component: SaleInvoicesReturnComponent;
  let fixture: ComponentFixture<SaleInvoicesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleInvoicesReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleInvoicesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
