import { TestBed } from '@angular/core/testing';

import { MovieTicketService } from './movie-ticket.service';

describe('MovieTicketService', () => {
  let service: MovieTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
