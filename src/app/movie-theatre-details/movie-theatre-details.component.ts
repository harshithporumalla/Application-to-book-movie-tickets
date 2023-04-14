import { Component, OnInit } from '@angular/core';
import { MovieTicketService } from '../movie-ticket.service';
import { Theatre } from '../theatre.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface BookedSeat {
  seat_number: number;
}

@Component({
  selector: 'app-movie-theatre-details',
  templateUrl: './movie-theatre-details.component.html',
  styleUrls: ['./movie-theatre-details.component.css']
})
export class MovieTheatreDetailsComponent implements OnInit {
  theatres: Theatre[] | undefined;
  bookingForm!: FormGroup;
  bookedSeats: number[] = [];
  selectedSeats: number[] = [];
  seats = Array.from({ length: 100 }, (_, index) => index + 1);

    showSuccessMessage: boolean = false; // Initialize the boolean property
  serverErrorMessage: string = ''; // Initialize the string property
  selectedMovieName: any;
  selectedShowTime: any;
  selectedTheatreName: any;
  closeResult!: string;
  successmessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private movieTicketService: MovieTicketService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.movieTicketService.getTheatreDetails().subscribe(data => {
      this.theatres = data.theatre;
      this.bookedSeats = this.getBookedSeats();
    });

    this.bookingForm = this.formBuilder.group({
      // Define your form controls here
    });

   
  }



  


  selectSeat(seatNumber: number): void {
    console.log(seatNumber)
    const index = this.selectedSeats.indexOf(seatNumber);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seatNumber);
    }
    console.log(this.selectedSeats + "example ")
  }
 

  getBookedSeats(): number[] {
    const theatre = this.theatres?.find(t => t.theatre_name === this.selectedTheatreName);
    const bookedSeats = theatre?.booked_seats?.map(seat => seat.seat_number) || [];
    const allSeats = Array.from({ length: theatre?.seating_capacity || 0 }, (_, i) => i + 1);
    return allSeats.filter(seatNumber => !bookedSeats.includes(seatNumber));
  }
  



  isSelected(seatNumber: number): boolean {
    return this.selectedSeats.indexOf(seatNumber) > -1;
  }

  onSeatSelect(seatNumber: number): void {
    const index = this.bookedSeats.indexOf(seatNumber);
    if (index > -1) {
      // Seat is already booked, do not allow selection
      return;
    }
  
    const selectedIndex = this.selectedSeats.indexOf(seatNumber);
    if (selectedIndex > -1) {
      // Seat is already selected, deselect it
      this.selectedSeats.splice(selectedIndex, 1);
    } else {
      // Seat is not selected, select it
      this.selectedSeats.push(seatNumber);
    }
  }
  
  isSeatBooked(seatNumber: number): boolean {
    return this.bookedSeats.includes(seatNumber);
  }
  
  onBookingFormSubmit() {
  
    // this.bookingForm.controls.['bookedSeats'].setValue(this.selectedSeats);
    
    // Show success message
    const body = {
      "movie_name": this.selectedMovieName,
      "show_time": this.selectedShowTime,
      "theatre_name": this.selectedTheatreName,
      "booked_seats": this.selectedSeats, // Pass the updated bookedSeats array
      "date": "22/12/2022",
      "user_mail_id": "sample@gmail.com"
    };
    
  

    this.movieTicketService.bookSeats(body).subscribe(data => {
      console.log(data)
      this.showSuccessMessage = true;
      this.successmessage = data["message"]
    });
  }
  

  
  open(content: any, movieName: any, showTime: any, theatreName: any) {
    this.selectedMovieName = movieName;
    this.selectedShowTime = showTime;
    this.selectedTheatreName = theatreName;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    console.log('Movie Name: ', this.selectedMovieName);
    console.log('Show Time: ', this.selectedShowTime);
    console.log('Theatre Name: ', this.selectedTheatreName);
    console.log('booked seats: ', this.bookedSeats);

    this.showSuccessMessage = false;
  }
  getDismissReason(reason: any) {
    throw new Error('Method not implemented.');
  }

  

  
}
