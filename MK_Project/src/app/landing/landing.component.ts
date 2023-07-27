import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../common/commonservice.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showmenu:boolean=false;
  deta:boolean=true;
  clicked = false;
  data:any;
constructor(private router:Router,
            private commonserviceService:CommonserviceService){}
//flag set for buttons//
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
//toggling menu//
menu(){
  this.showmenu= !this.showmenu
  this.router.navigateByUrl('')
}
 dita=
 this.deta=!this.deta
 

}
