import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../common/commonservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
constructor(private router:Router,
            private commonserviceService:CommonserviceService){}

journey(journey:string){
if(journey === 'admin'){
this.commonserviceService.journey='admin'
this.router.navigateByUrl('admin')
}
else if (journey === 'owner'){
  this.commonserviceService.journey='owner'
  this.router.navigateByUrl('owner')
}
else {
  this.commonserviceService.journey='user'
this.router.navigateByUrl('user')

}

}
}
