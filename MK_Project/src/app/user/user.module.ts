import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersignupComponent,
    UserloginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
