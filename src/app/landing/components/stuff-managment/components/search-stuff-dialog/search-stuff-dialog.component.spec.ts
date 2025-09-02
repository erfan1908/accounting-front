import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStuffDialogComponent } from './search-stuff-dialog.component';

describe('SearchStuffDialogComponent', () => {
  let component: SearchStuffDialogComponent;
  let fixture: ComponentFixture<SearchStuffDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchStuffDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchStuffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
