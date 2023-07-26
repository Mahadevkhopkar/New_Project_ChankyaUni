import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
 
url=' http://localhost:3000/'
  constructor(private httpclient:HttpClient) { }



  postApicall(endpoint:string,data:any){
    let Url=this.url+endpoint;
   return  this.httpclient.post(Url,data)

  }
  getApicall(endpoint:string){
   let url=this.url+endpoint;
   return  this.httpclient.get(url)
  }
}
