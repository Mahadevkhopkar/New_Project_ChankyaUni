import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  url = ' http://localhost:3000/'
  constructor(private httpclient: HttpClient) { }



  postApicall(endpoint: string, data: any) {
    let Url = this.url + endpoint;
    return this.httpclient.post(Url, data)

  }
  getApicall(endpoint: string) {
    let url = this.url + endpoint;
    return this.httpclient.get(url)
  }
  patchApi(endpoint: string, data: any, id: number) {
    let url = this.url + endpoint + '/' + id;
    return this.httpclient.patch(url, data)
  }
  detete(endpoint: string, id: number) {
    let url = this.url + endpoint + '/' + id;
    return this.httpclient.delete(url)
  }

}
