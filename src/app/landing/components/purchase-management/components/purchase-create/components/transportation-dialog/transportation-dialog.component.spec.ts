import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationDialogComponent } from './transportation-dialog.component';

describe('TransportationDialogComponent', () => {
  let component: TransportationDialogComponent;
  let fixture: ComponentFixture<TransportationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
