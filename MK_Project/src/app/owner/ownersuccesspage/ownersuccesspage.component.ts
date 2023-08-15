import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from 'src/app/common/common-api.service';
import { ToastrService } from 'ngx-toastr';
import { CommonserviceService } from 'src/app/common/commonservice.service';


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
  searchval:any
  // tableData: any[] = ['Name', 'LastName', 'Address', 'ChooseHotel', 'RoomAvailable', 'Menu', 'Payment', 'delete', 'edit'];
  search!: string;
  tableData: any[]=[];

  dataById: any;
  inp: any;
  inputvalue:any;
  constructor(private router: Router,
    private commonApiService: CommonApiService,
    private tosterservice: ToastrService, private commonnService: CommonserviceService) { }


  ngOnInit() {
    // this.bookingdetails();
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
    this.showdata = !this.showdata;
    let endPoint = 'Bookingdataview'
    this.commonApiService.getApicall(endPoint).subscribe(data => {
      console.log(data);
      this.bookingGetData = data
  //  this.bookingGetData = await this.commonApiService.getApicall(endPoint).toPromise()
  //   this.tosterservice.success('data showed')
    
    })
  }
  list() {
    this.router.navigateByUrl('owner/hotelList')
  }

  async delete(id: number) {
    await this.commonApiService.delete('Bookingdataview', id).toPromise()
    this.showdata = !this.showdata;
    this.bookingdetails()
  }
  async edit(id: number) {
    this.commonnService.id = id
    this.dataById = await this.commonApiService.editApicall('Bookingdataview', id).toPromise()
    this.commonnService.dataById = this.dataById
    this.router.navigateByUrl('owner/hotelBooking')
  }
  inptval(event:any){
    this.inp = this.data.target.value;
    console.log(this.inputvalue);
    console.log(this.inptval);
    
    
    }
  searchvalue(){
    this.search = this.inp
  }


}