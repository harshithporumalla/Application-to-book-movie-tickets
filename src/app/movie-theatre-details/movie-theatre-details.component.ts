import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTicketService } from '../movie-ticket.service';

@Component({
  selector: 'app-movie-theatre-details',
  templateUrl: './movie-theatre-details.component.html',
  styleUrls: ['./movie-theatre-details.component.css']
})
export class MovieTheatreDetailsComponent implements OnInit {
  movieName!: string;
  theatreName!: string;
  theatreDetails: { date: string, showTimes: string[], availableSeats: number } | null = null;
  showTimes: string[] = [];
  date: string = "";
  availableSeats!: number;

  constructor(
    private route: ActivatedRoute,
    private movieTicketService: MovieTicketService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieName = params.get('movieName')!;
      this.theatreName = params.get('theatreName')!;
      this.getTheatreDetails(this.movieName, this.theatreName);
    });
  }

  getTheatreDetails(movieName: string, theatreName: string): void {
    this.movieTicketService.getTheatreDetails(movieName, theatreName)
      .subscribe(data => {
        this.theatreDetails = data;
        this.showTimes = this.theatreDetails?.showTimes ?? [];
        this.date = this.theatreDetails?.date ?? '';
        this.availableSeats = this.theatreDetails?.availableSeats ?? 0;
      });
  }
}
