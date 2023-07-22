import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminsignupComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
