import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../common/commonservice.service';
import { ToastrService } from 'ngx-toastr';


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
            private commonserviceService:CommonserviceService, private tostrservice:ToastrService) {
              
            }
//flag set for buttons//
journey(journey:string){
if(journey === 'admin'){
this.commonserviceService.journey='admin'
this.router.navigateByUrl('admin')
this.tostrservice.success('success', 'datashowed')
}
else if (journey === 'owner'){
  this.commonserviceService.journey='owner'
  this.router.navigateByUrl('owner')
  this.tostrservice.success('success', 'successfuly redirect owner page')
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
