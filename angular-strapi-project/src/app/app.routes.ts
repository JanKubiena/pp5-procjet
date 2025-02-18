import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'user', loadChildren: () => import('./user-module/user-module.module').then((m) => m.UserModuleModule)},
    {path: 'films', loadChildren: () => import('./film-module/film-module.module').then((m) => m.FilmModuleModule)},
    {path: '', component: HomeComponent}
];
