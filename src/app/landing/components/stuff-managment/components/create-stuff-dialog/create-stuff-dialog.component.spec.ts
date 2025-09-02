import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStuffDialogComponent } from './create-stuff-dialog.component';

describe('CreateStuffDialogComponent', () => {
  let component: CreateStuffDialogComponent;
  let fixture: ComponentFixture<CreateStuffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStuffDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStuffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
