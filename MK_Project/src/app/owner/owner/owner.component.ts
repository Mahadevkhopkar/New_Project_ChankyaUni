import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
constructor(private router : Router){}

journey(journey:string){
  if(journey=== 'ownerlogin'){
    this.router.navigateByUrl('owner/ownerLogin')
  }
  else{
    this.router.navigateByUrl('owner/ownerSignup')
  }
}
}
