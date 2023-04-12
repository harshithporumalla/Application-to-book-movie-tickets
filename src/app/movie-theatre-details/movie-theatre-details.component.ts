import { Component, OnInit } from '@angular/core';
import { MovieTicketService } from '../movie-ticket.service';
import { Theatre } from '../theatre.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-theatre-details',
  templateUrl: './movie-theatre-details.component.html',
  styleUrls: ['./movie-theatre-details.component.css']
})
export class MovieTheatreDetailsComponent implements OnInit {
  theatres: Theatre[] | undefined;
  bookingForm!: FormGroup;

    showSuccessMessage: boolean = false; // Initialize the boolean property
  serverErrorMessage: string = ''; // Initialize the string property

  constructor(
    private formBuilder: FormBuilder,
    private movieTicketService: MovieTicketService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.movieTicketService.getTheatreDetails().subscribe(data => {
      this.theatres = data.theatre;
    });

    this.bookingForm = this.formBuilder.group({
      // Define your form controls here
    });
  }

  onBookingFormSubmit() {
    // Handle form submission here
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
