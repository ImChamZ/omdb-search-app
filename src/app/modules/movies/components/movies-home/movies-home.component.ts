import { Component, OnInit, Optional } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss'],
})
export class MoviesHomeComponent implements OnInit {
  searchResult = [];
  errorText = '';
  isSearching: boolean = false;

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {}

  handleSearch(searchText) {
    this.searchResult = [];
    this.isSearching = true;
    this.moviesService.getMovieList(searchText).then((response: any) => {
      if (response.Response === 'False') {
        this.errorText = response.Error;
      } else {
        this.searchResult = response.Search;
      }
      this.isSearching = false;
    });
  }
}
