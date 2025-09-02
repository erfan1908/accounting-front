import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffBatchComponent } from './stuff-batch.component';

describe('StuffBatchComponent', () => {
  let component: StuffBatchComponent;
  let fixture: ComponentFixture<StuffBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffBatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
