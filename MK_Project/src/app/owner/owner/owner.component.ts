import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonApiService } from 'src/app/common/common-api.service';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  loginForm!: FormGroup;
  forgotForm!: FormGroup;
  endpoint!: string;
  owenerData: any;
  showform: any;
  hide: boolean = true;
  validUser: boolean = false;
  updatedata!: any;
  forgotPasswordData: boolean = false
  userName!: string;
  constructor(private router: Router,
    private commonservice: CommonserviceService,
    private commonApiService: CommonApiService, private formbuilder: FormBuilder, private toastrservice: ToastrService) { }

  ngOnInit() {
    this.endpoint = this.commonservice.journey
    console.log('endpoint', this.endpoint);

    this.loginFormdetails();
    // this.updatePassword();
  }


  loginFormdetails() {
    this.loginForm = this.formbuilder.group({
      name: [],
      password: [],

    })
  }
  submit() {


    this.getowenerApidata();
    console.log('this.owenerData', this.owenerData);

    if (this.owenerData) {
      this.isValidUser();
      if (this.validUser) {
        this.router.navigateByUrl('owner/ownersuccesspage')
        this.toastrservice.success('successfully loged')
      }
      else {
        this.router.navigateByUrl('owner/ownerhome')
        this.toastrservice.error('Password Enter Worong')
      }


    }

  }
  getowenerApidata() {
    this.commonApiService.getApicall(this.endpoint).subscribe(response => {
      console.log("ghhh....", response);
      this.owenerData = response
    })
  }

  ownersignupPage() {

    this.router.navigateByUrl('owner/ownerSignup')
  }
  isValidUser() {

    this.owenerData.forEach((element: any) => {
      if (element.UserName === this.loginForm.value.name && element.Password === this.loginForm.value.password) {
        this.validUser = true;
      }


    });

  }
  click() {
    // this.showform = this.showform
    this.router.navigateByUrl('landing')
  }
  forgotPassword() {
    this.forgotForm = this.formbuilder.group({
      NewPassword: [],
      confirmNewPassword: []
    })

  }
  submitbutton() {}
  //   if (this.owenerData) {
  //     this.updatePassword();
  //   }
  //   else {
  //     this.getowenerApidata();
  //     this.updatePassword();
  //   }
  //   this.forgotPasswordData = !this.forgotPasswordData


  // }
  forgotpassworddetails() {
    this.forgotPasswordData = !this.forgotPasswordData
    this.forgotPassword()
  }
  // updatePassword() {
  //   var user: any;
  //   this.owenerData.forEach((data: any) => {
  //     if (data.UserName === this.userName) {
  //       user = data;
  //     }
  //   })
  //   if (user) {
  //     let request = {
  //       Password: this.forgotForm.value.NewPassword
  //     }
  //      this.commonApiService.patchApi(this.endpoint, request, user.id).subscribe(data=>{
  //       this.owenerData=data
  //      })
  //   }
  // }

}