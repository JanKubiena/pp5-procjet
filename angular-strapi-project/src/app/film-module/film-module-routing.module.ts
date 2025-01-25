import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { AddFilmFormComponent } from './components/add-film-form/add-film-form.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const routes = [
    {path: 'films-list', component: FilmsListComponent},
    {path: 'add-film', component: AddFilmFormComponent},
    {path: 'film-details/:id', component: FilmDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FilmModuleRoutingModule {}