import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent {
  showdata:boolean=false
constructor( private router:Router){}

enter(){
  this.showdata=!this.showdata
  this.router.navigateByUrl('showdata')
}
}
