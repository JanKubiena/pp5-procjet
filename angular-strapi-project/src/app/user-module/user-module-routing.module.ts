import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoggedInGuard } from '../guards/is-logged-in.guard';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/signup/signup.component';

const routes = [
    {path: 'account', component: AccountComponent, canActivate: [LoggedInGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserModuleRoutingModule {}