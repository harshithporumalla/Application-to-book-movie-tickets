import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Theatre, Movie, Pokedex } from './theatre.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://example.com/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Pokedex>(`${this.apiUrl}/movies`).pipe(
      map(pokedex => pokedex.movies)
    );
  }

  getTheatres(): Observable<Theatre[]> {
    return this.http.get<Pokedex>(`${this.apiUrl}/theatres`).pipe(
      map(pokedex => pokedex.theatre)
    );
  }

  getTheatreById(id: number): Observable<Theatre> {
    return this.http.get<Theatre>(`${this.apiUrl}/theatres/${id}`);
  }

  bookSeats(theatreId: number, movieId: number, date: string, seats: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookings`, { theatreId, movieId, date, seats });
  }
}
