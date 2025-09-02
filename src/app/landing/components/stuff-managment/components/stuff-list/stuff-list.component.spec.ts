import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffsTableComponent } from './stuff-list.component';

describe('StuffsTableComponent', () => {
  let component: StuffsTableComponent;
  let fixture: ComponentFixture<StuffsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
