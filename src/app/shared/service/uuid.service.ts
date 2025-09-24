import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  constructor() { }
  uuid(){
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    .replace( /[xy]/g,
        Character=>{
        const random=(Math.random()*16)|0
        const value=Character ==='x'?  random:(random & 0x3)|0x8
        return value.toString(16)
    })
}

}
