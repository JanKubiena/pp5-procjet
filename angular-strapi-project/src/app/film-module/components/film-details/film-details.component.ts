import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { FilmsService } from '../../../services/films.service';
import { Film, PostFilm } from '../../../models/film';

@Component({
  selector: 'app-film-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss'
})
export class FilmDetailsComponent implements OnInit {
  currentFilm: Film = {} as Film;

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
    ).subscribe(film => this.currentFilm = film.data);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const action = (target.querySelector('button[type="submit"][name="action"]:focus') as HTMLButtonElement).value;

    if (action === 'save') {
      this.updateFilm();
    } else if (action === 'delete') {
      this.deleteFilm();
    }
  }

  updateFilm() {
    let updatedFilm: PostFilm = {
      Title: this.currentFilm.Title,
      Director: this.currentFilm.Director,
      Grade: this.currentFilm.Grade,
      user: this.currentFilm.user.documentId,
      FilmStatus: this.currentFilm.FilmStatus,
      FilmComment: this.currentFilm.FilmComment,
      Favourite: this.currentFilm.Favourite,
    };

    this.fs.updateFilm(updatedFilm, this.currentFilm.documentId).subscribe(res => {
      console.log(res);
      this.router.navigate(['/films/films-list']);
    });
  }

  deleteFilm() {
    if(confirm('Are you sure you want to delete this film?')) {
      this.fs.deleteFilm(this.currentFilm.documentId).subscribe(res => {
        console.log(res);
        this.router.navigate(['/films/films-list']);
      });
    }
  }
}
