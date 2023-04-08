import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMovieTicketComponent } from './book-movie-ticket.component';

describe('BookMovieTicketComponent', () => {
  let component: BookMovieTicketComponent;
  let fixture: ComponentFixture<BookMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMovieTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
