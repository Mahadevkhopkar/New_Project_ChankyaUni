import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from 'src/app/common/common-api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ownersuccesspage',
  templateUrl: './ownersuccesspage.component.html',
  styleUrls: ['./ownersuccesspage.component.css']
})
export class OwnersuccesspageComponent {
  bookingGetData: any;

  // inp:any;
  data: any;
  showdata: any

  tableData: any[] = ['Name', 'LastName', 'Address', 'ChooseHotel', 'RoomAvailable', 'Menu', 'Payment'];
  searchboxval: any;

  constructor(private router: Router, private commonApiService: CommonApiService, private tosterservice: ToastrService) { }


  ngOnInit() {
    //   this.data();
    //   console.log(this.ngOnInit);

  }


  book() {
    this.router.navigateByUrl('owner/hotelBooking')

  }


  // getdatadetails(){
  //   this.inp = this.data.target.value
  //       console.log('inpt.....',this.inp);

  // }


  bookingdetails() {

    let endPoint = 'Bookingdataview'
    this.commonApiService.getApicall(endPoint).subscribe(data => {
      console.log(data);
      this.bookingGetData = data
      
    })
    this.showdata = !this.showdata;
this.tosterservice.success('data showed')

  }

}
