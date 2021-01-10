import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    MoviesHomeComponent,
    MovieDetailsComponent,
    MovieListComponent,
  ],
  imports: [CommonModule, SharedModule, CoreModule, HttpClientModule],
  exports: [MoviesHomeComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
