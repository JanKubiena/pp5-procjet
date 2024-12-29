import { Routes } from '@angular/router';
import { AccountComponent } from './user-module/account/account.component';
import { LoginComponent } from './user-module/login/login.component';
import { RegistrationComponent } from './user-module/registration/registration.component';

export const routes: Routes = [
    {path: 'user', loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule)},
];
