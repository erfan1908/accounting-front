import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffManagmentComponent } from './stuff-managment.component';

describe('StuffManagmentComponent', () => {
  let component: StuffManagmentComponent;
  let fixture: ComponentFixture<StuffManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
