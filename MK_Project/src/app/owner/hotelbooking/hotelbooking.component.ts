import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiService } from 'src/app/common/common-api.service';


  

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.css']
})
export class HotelbookingComponent {
  bookingForm !:FormGroup;
  Foods=['','veg','nonVege','southIndian',]
  Payments=['','GooglePay','PhonePay','PayTm','AmezonPay']
  HotelsName=['','Sayaji Hotel','Orchid Hotel','MK Hotel','Taj Hotel','Oberoy Hotel']
  selectVal:string='';
  bookedhotel!: any;
  

  constructor( private  fb :FormBuilder,private router:Router,private commonApiService:CommonApiService){}

ngOnInit(){
this.bookingFormData();
}

bookingFormData( )
{
this.bookingForm=this.fb.group({
  name:[''],
  lastName:[''],
  address:[''],
  chooseHotel:[''],
  roomAvailable:[''],
  menu:[''],
  payment:[''],
 
})
console.log('bookingdata...',this.bookingFormData);

}
submit(){
  let request={
  Name:this.bookingForm.value.name,
 lastName:this.bookingForm.value.lastName,
 Address:this.bookingForm.value.address,
 ChooseHotel:this.bookingForm.value.chooseHotel,
 RoomAvailable:this.bookingForm.value.roomAvailable,
 Menu:this.bookingForm.value.menu,
 Payment:this.bookingForm.value.payment
  }
  let endpoint="Bookingdataview";
  
this.commonApiService.postApicall(endpoint,request).subscribe(details=>{
console.log('details.....',details);
this.bookedhotel= details


})
if(this.bookedhotel){
  this.router.navigateByUrl('owner/ownersuccesspage')
  }

 else this.router.navigateByUrl('owner/hotelBooking')
}

}






 
  
  

