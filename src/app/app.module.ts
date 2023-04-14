import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieTheatreDetailsComponent } from './movie-theatre-details/movie-theatre-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieTicketService } from './movie-ticket.service';
import { MovieTicketCheckerService } from './movie-ticket-checker.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MovieTheatreDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [MovieTicketService,MovieTicketCheckerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
