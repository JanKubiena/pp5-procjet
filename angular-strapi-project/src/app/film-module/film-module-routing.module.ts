import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';

const routes = [
    {path: 'films-list', component: FilmsListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FilmModuleRoutingModule {}