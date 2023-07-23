import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  journey!: string
  UserName: any
  PanNumber: any
  Password: any
  ConfirmPassword: any
  MobNumber: any
  Email: any
  City: any
  Gender: any
  constructor() { }
}
