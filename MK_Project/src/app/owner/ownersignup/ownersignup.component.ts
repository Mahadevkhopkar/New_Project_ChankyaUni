import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiService } from 'src/app/common/common-api.service';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.css']
})
export class OwnersignupComponent {

  //   showdata:any;
  signUp!: FormGroup;
  journey: any
  postapirespo: any;
  // passwordValue: any;
  // isMatch: boolean=false;
  // confirmPassValue: any;
  // strongPassword!: boolean;
  Validators: any;
  // mismatch:any
  //   getbyId: any;



  constructor(private router: Router, private fb: FormBuilder, private commonservice: CommonserviceService,
    private commonapiservice: CommonApiService) { }

  ngOnInit() {
    this.journey = this.commonservice.journey;
    // console.log('b.......', this.journey);
    this.formdata();
    // console.log('hhhhhh', this.formdata);
    // this.isMatch=this.signUp.value
    // this.Validators= this.passwordMatchValidator



  }
  // enter(){
  // this.showdata=!this.showdata
  // }

  formdata() {
    this.signUp = this.fb.group({
      username: ['', [Validators.pattern("[a-zA-Z]*")]],
      panNumber: ['', [Validators.pattern("[a-zA-Z0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required]],
      confimpassword: ['', [Validators.required,]],
      mobnumber: ['', [Validators.pattern("[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      city: [''],
      gender: [''],

    })

  }

  submitdata() {
    let request = {
      UserName: this.signUp.value.username,
      PanNumber: this.signUp.value.panNumber,
      Password: this.signUp.value.password,
      ConfirmPassword: this.signUp.value.confirmpassword,
      MobNumber: this.signUp.value.mobnumber,
      Email: this.signUp.value.email,
      City: this.signUp.value.city,
      Gender: this.signUp.value.gender,



    }
    console.log(request);
    this.commonapiservice.postApicall(this.journey, request).subscribe(result => {
      console.log('g.....', result);
      this.postapirespo = result

    })


    this.router.navigateByUrl('owner')

  }
  //  password() {
  //   this.passwordValue = this.signUp.value.password;
  //   if (this.passwordValue === this.confirmPassValue) {
  //     this.isMatch = true;
  //   }
  //   else {
  //     this.isMatch = false;
  //   }
  //   let pasLength = this.passwordValue.length;
  //   if(pasLength > 10){
  //     this.strongPassword =true;
  //   }   
  // }

  // confirmPassword() {
  //   this.confirmPassValue = this.signUp.value.confimpassword;
  //   if (this.passwordValue === this.confirmPassValue) {
  //     this.isMatch = true;
  //   }
  //   else {
  //     this.isMatch = false;
  //   }
  // }
  back() {
    this.router.navigateByUrl('owner/ownerhome')
  }
  // passwordMatchValidator() {
  //   let password = this.signUp.get('password').value;
  //   let confirmPassword = this.signUp.get('confirmpassword')?.value;

  //   if (password !== confirmPassword) {
  //     this.signUp.get('confirmpassword')?.value.errors({ mismatch: true });
  //   } else {
  //     this.signUp.get('confirmpassword')?.value.errors(null);
  //   }
  // }
}

