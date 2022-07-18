import { Injectable } from '@angular/core';

export const LocalStorageKeys = {
  USER: "user",
  TOKEN: "token",
}

@Injectable({
  providedIn: 'root'
})
export class LocalStrogeService {

  constructor() { }

  set(key:string, value:any) {
    localStorage.setItem(key, value)
  }

  remove(key:string) {
    localStorage.removeItem(key)
  }

  get(key:string) {
    return localStorage.getItem(key)
  }

  contain(key:string):boolean {
    if(localStorage.getItem(key)) {
      return true
    } else {
      return false
    }
  }
}
