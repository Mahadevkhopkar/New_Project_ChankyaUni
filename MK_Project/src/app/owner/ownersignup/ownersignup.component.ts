import { Component } from '@angular/core';
import {FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.css']
})
export class OwnersignupComponent {
 
  showdata:any;
  signupForm!:FormGroup
  getbyId: any;



constructor(private router:Router,private fb:FormBuilder,private commonservice:CommonserviceService){}

ngOnInit(){
  // this.getbyId=this.commonservice.journey
  console.log('b.......', this.getbyId);
  this.ownerpostdata()
  

}


// enter(){
// this.showdata=!this.showdata
// }

ownerpostdata(){
  this.signupForm=this.fb.group({
    UserName:[],
    PanNumber:[],
    Password:[],
    ConfirmPassword:[],
    MobNumber:[],
    Email:[],
    City:[],
    Gender:[],



})
}

submitdata(){
console.log('data...' , this.submitdata); 
// this.commonservice.UserName=this.signupForm.value.name,
// this.commonservice.PanNumber=this.signupForm.value.panNumber,
// this.commonservice.PanNumber=this.signupForm.value.password,
// this.commonservice.PanNumber=this.signupForm.value.confirmpasswprd,
// this.commonservice.PanNumber=this.signupForm.value.mobNumber,
// this.commonservice.PanNumber=this.signupForm.value.email,
// this.commonservice.PanNumber=this.signupForm.value.city,
// this.commonservice.PanNumber=this.signupForm.value.gender,




  this.router.navigateByUrl('owner/ownersuccesspage')
}

}
