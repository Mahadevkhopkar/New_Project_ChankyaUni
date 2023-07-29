import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersuccesspage',
  templateUrl: './ownersuccesspage.component.html',
  styleUrls: ['./ownersuccesspage.component.css']
})
export class OwnersuccesspageComponent {

constructor( private router:Router){}





  book(){
    this.router.navigateByUrl('owner/hotelBooking')
  }
  bookingdetails(){
    
  }
}
