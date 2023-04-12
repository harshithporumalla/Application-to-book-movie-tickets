import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTicketService {

  private baseUrl = 'https://zincubate.in/api/MovieTicketChecker';

  constructor(private http: HttpClient) { }

  getAllDetails(user_mail_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?action=getAllDetails&user_mail_id=${user_mail_id}`);
  }

  bookSeats(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}?action=bookSeats`, payload);
  }

  getTheatreDetails(): Observable<any> {
    return this.http.post(`${this.baseUrl}?action=getAllDetails`, {"user_mail_id":"baahubali8@gmail.com"});
  }
}
