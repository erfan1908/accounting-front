import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfileDialogComponent } from './person-profile-dialog.component';

describe('PersonProfileDialogComponent', () => {
  let component: PersonProfileDialogComponent;
  let fixture: ComponentFixture<PersonProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonProfileDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
