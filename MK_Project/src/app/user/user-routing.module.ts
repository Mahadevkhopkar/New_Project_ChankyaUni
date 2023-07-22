import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'userLogin',component:UserloginComponent},
  {path:'userSignup',component:UsersignupComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
