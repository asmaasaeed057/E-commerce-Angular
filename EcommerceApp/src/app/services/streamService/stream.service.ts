import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class StreamService {
  private name:BehaviorSubject<any>=new BehaviorSubject({});

  setdata(val :any):void
  {
    this.name.next(val);
   
  }
  
  getdata(){
    return this.name.asObservable();
  }
  constructor() { }
}
