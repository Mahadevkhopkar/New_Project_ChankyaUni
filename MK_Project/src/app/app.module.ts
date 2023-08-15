import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from './common/shared/shared.module';
import { FilterPipe } from './filter.pipe';




// import { OwnerModule } from './owner/owner.module';
// import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FilterPipe,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    MatCardModule,
    SharedModule,
    

   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
