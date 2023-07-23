import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
constructor(private router:Router){}

journey( ){

    this.router.navigateByUrl('admin/adminsignup')
  }
}
// login(){
//   this.router.navigateByUrl('admin/adminlogin')
// }
// signup(){
// this.router.navigateByUrl('admin/sigadminsignupnup')
// }

