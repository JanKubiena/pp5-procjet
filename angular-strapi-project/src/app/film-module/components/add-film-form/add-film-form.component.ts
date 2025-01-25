import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authentication.service';
import { FilmsService } from '../../../services/films.service';
import { PostFilm } from '../../../models/film';


@Component({
  selector: 'app-add-film-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-film-form.component.html',
  styleUrl: './add-film-form.component.scss'
})
export class AddFilmFormComponent {

  constructor(public auth: AuthService, private fs: FilmsService, private route: Router) {}

  userFilm: PostFilm = {} as PostFilm;

  addFilm() {
    this.userFilm.user = this.auth.getPersistedUserId();
    this.fs.addFilm(this.userFilm).subscribe(res => {
      console.log(res);
    });
    this.route.navigate(['/films/films-list']);
  }

}
