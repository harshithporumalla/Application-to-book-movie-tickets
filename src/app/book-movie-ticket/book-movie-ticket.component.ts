import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieTicketService } from '../movie-ticket.service';


@Component({
  selector: 'app-book-movie-ticket',
  templateUrl: './book-movie-ticket.component.html',
  styleUrls: ['./book-movie-ticket.component.css']
})

export class BookMovieTicketComponent implements OnInit {



  bookingForm: FormGroup = new FormGroup({}); // Add an initializer for the FormGroup property

  showSuccessMessage: boolean = false; // Initialize the boolean property
  serverErrorMessage: string = ''; // Initialize the string property

  constructor(private formBuilder: FormBuilder, private movieTicketService: MovieTicketService) { }

  ngOnInit() {
    this.createBookingForm();
  }

  createBookingForm() {
    this.bookingForm = this.formBuilder.group({
      showTime: ['', Validators.required],
      movieName: ['', Validators.required],
      theatreName: ['', Validators.required],
      bookedSeats: ['', Validators.required],
      date: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  onBookingFormSubmit() {
    this.showSuccessMessage = false;
    this.serverErrorMessage = '';
    const bookingData = this.bookingForm.value;
    this.movieTicketService.bookSeats(bookingData)
      .subscribe(
        response => {
          console.log(response);
          this.showSuccessMessage = true;
          this.bookingForm.reset();
        },
        error => {
          console.log(error);
          this.serverErrorMessage = 'Failed to book movie ticket. Please try again later.';
        }
      );
  }

}