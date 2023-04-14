import { TestBed } from '@angular/core/testing';

import { MovieTicketCheckerService } from './movie-ticket-checker.service';

describe('MovieTicketCheckerService', () => {
  let service: MovieTicketCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTicketCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
