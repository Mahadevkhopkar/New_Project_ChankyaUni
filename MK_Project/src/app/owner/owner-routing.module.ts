import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';

import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccesspageComponent } from './ownersuccesspage/ownersuccesspage.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

const routes: Routes = [
  {path:'',component:OwnerComponent},
  {path:'ownerhome', component:OwnerComponent},
  {path: 'ownersuccesspage', component:OwnersuccesspageComponent},
  {path: 'ownerSignup', component:OwnersignupComponent},
  {path: 'hotelBooking',component:HotelbookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
