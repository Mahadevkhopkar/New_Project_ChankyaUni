import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

const routes: Routes = [
  {path:'',component:OwnerComponent},
  {path: 'ownerLogin', component:OwnerloginComponent},
  {path: 'ownerSignup', component:OwnersignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
