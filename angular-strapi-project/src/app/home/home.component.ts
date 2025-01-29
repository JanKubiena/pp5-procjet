import { Component, OnInit } from '@angular/core';
import { FilmsApiService } from '../services/films-api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private filmsApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.filmsApiService.getNowPlayingMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }
}
