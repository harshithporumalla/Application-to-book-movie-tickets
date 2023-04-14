import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTheatreDetailsComponent } from './movie-theatre-details/movie-theatre-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie-details', pathMatch: 'full' },
  { path: 'movie-details', component: MovieTheatreDetailsComponent },
  { path: '**', component: MovieTheatreDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
