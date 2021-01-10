import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieId: any;

  movieDetails: any;
  errorText: string;
  isSearching: boolean = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.isSearching = true;
    this.moviesService.getMovieDetails(this.movieId).then((response: any) => {
      if (response.Response === 'False') {
        this.errorText = response.Error;
      } else {
        this.movieDetails = response;
      }
      this.isSearching = false;
    });
  }
}
