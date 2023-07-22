import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path : 'adminlogin', component: AdminloginComponent},
{path : 'adminsignup', component: AdminsignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
