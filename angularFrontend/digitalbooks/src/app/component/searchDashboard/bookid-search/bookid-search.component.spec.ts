import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookidSearchComponent } from './bookid-search.component';

describe('BookidSearchComponent', () => {
  let component: BookidSearchComponent;
  let fixture: ComponentFixture<BookidSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookidSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
