import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiService } from 'src/app/common/common-api.service';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  loginForm!: FormGroup;
  endpoint!: string;
  owenerdata: any;
  showform: any;
  validUser: boolean = false
  constructor(private router: Router,
    private commonservice: CommonserviceService,
    private commonApiService: CommonApiService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.endpoint = this.commonservice.journey
    console.log('endpoint', this.endpoint);

    this.loginFormdetails();

  }


  loginFormdetails() {
    this.loginForm = this.formbuilder.group({
      name: [],
      password: [],

    })
  }
  submit() {
    this.getowenerApidata();
    console.log('this.owenerdata', this.owenerdata);

    if (this.owenerdata) {
      this.isValidUser();
      if (this.validUser) {
        this.router.navigateByUrl('owner/ownersuccesspage')
      }
      else {
        this.router.navigateByUrl('owner/ownerhome')
      }

    }

  }
  getowenerApidata() {
    this.commonApiService.getApicall(this.endpoint).subscribe(response => {
      console.log("ghhh....", response);
      this.owenerdata = response
    })
  }

  ownersignupPage() {

    this.router.navigateByUrl('owner/ownerSignup')
  }
  isValidUser() {

    this.owenerdata.forEach((element: any) => {
      if (element.UserName === this.loginForm.value.name && element.Password === this.loginForm.value.password) { 
        this.validUser = true;
      }

      
    });
    
  }
  click() {
    this.showform = !this.showform

  }

}

