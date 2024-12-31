import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [AccountComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule, UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
