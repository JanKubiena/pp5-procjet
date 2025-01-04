import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthGuard } from '../guards/authentication.guard';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes = [
    {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserModuleRoutingModule {}