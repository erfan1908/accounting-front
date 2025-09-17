import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffServiceCreateComponent } from './stuff-service-create.component';

describe('StuffServiceCreateComponent', () => {
  let component: StuffServiceCreateComponent;
  let fixture: ComponentFixture<StuffServiceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffServiceCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
