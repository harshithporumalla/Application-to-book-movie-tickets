import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieTheatreDetailsComponent } from './movie-theatre-details/movie-theatre-details.component';
import { BookMovieTicketComponent } from './book-movie-ticket/book-movie-ticket.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieTicketService } from './movie-ticket.service';
import { MovieTicketCheckerService } from './movie-ticket-checker.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MovieTheatreDetailsComponent,
    BookMovieTicketComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MovieTicketService,MovieTicketCheckerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
