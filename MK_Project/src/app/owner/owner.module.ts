import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner/owner.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnersignupComponent,
    OwnerloginComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
