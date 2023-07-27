import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner/owner.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

import { OwnersuccesspageComponent } from './ownersuccesspage/ownersuccesspage.component';
import { SharedModule } from '../common/shared/shared.module';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnersignupComponent,
  OwnersuccesspageComponent,
  HotelbookingComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
