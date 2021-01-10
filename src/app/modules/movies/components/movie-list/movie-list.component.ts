import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movieList = [];

  selectedId = '';
  constructor() {}

  ngOnInit(): void {
    this.selectedId = '';
  }

  toggleDetails(id: string) {
    this.selectedId = id;
  }
}
