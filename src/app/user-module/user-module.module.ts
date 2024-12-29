import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [AccountComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule, UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
