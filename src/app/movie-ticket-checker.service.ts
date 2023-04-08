import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieTicketCheckerService {
  private apiURL = 'https://zincubate.in/api/MovieTicketChecker';

  constructor(private http: HttpClient) { }

  // API call to get list of all theaters
  getTheatreList() {
    return this.http.get<any>(`${this.apiURL}?action=getTheatreList`);
  }

  // API call to get list of movies in a theater
  getMoviesInTheatre(theatreName: string) {
    return this.http.get<any>(`${this.apiURL}?action=getMoviesInTheatre&theatre_name=${theatreName}`);
  }

  // API call to get movie details
  getMovieDetails(movieName: string) {
    return this.http.get<any>(`${this.apiURL}?action=getMovieDetails&movie_name=${movieName}`);
  }

  // API call to get list of available shows
  getAvailableShows(movieName: string, theatreName: string, date: string) {
    return this.http.get<any>(`${this.apiURL}?action=getAvailableShows&movie_name=${movieName}&theatre_name=${theatreName}&date=${date}`);
  }

  // API call to book seats
  bookSeats(showTime: string, movieName: string, theatreName: string, bookedSeats: string, date: string, userMailId: string) {
    const body = {
      show_time: showTime,
      movie_name: movieName,
      theatre_name: theatreName,
      booked_seats: bookedSeats,
      date: date,
      user_mail_id: userMailId
    };
    return this.http.post<any>(`${this.apiURL}?action=bookSeats`, body);
  }
}
