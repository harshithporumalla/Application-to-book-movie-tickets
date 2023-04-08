import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMovieTicketComponent } from './book-movie-ticket/book-movie-ticket.component';
import { MovieTheatreDetailsComponent } from './movie-theatre-details/movie-theatre-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie-details', pathMatch: 'full' },
  { path: 'movie-details', component: MovieTheatreDetailsComponent },
  { path: 'book-movie-ticket', component: BookMovieTicketComponent },
  { path: '**', component: MovieTheatreDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
