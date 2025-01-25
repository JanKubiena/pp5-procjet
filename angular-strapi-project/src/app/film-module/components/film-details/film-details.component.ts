import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FilmsService } from '../../../services/films.service';
import { Film } from '../../../models/film';

@Component({
  selector: 'app-film-details',
  imports: [CommonModule],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss'
})
export class FilmDetailsComponent implements OnInit {
  CurrentFilm: Film = {} as Film;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fs: FilmsService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.fs.getFilmById(params.get('id')!)
      )
    ).subscribe(film => this.CurrentFilm = film.data);
  }
}
