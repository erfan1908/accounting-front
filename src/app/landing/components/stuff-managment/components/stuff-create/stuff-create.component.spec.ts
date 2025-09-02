import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffCreateComponent } from './stuff-create.component';

describe('StuffCreateComponent', () => {
  let component: StuffCreateComponent;
  let fixture: ComponentFixture<StuffCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
