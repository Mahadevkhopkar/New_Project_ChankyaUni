import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
constructor(private router : Router){}

journey(){
  
    this.router.navigateByUrl('owner/ownerSignup')
  }
  
  submit(){
    this.router.navigateByUrl('owner/ownersuccesspage')
  }
}
