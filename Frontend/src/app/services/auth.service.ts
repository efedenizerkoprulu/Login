import { Router } from '@angular/router';
import { RegisterModel } from './../Models/registerModel';
import { LocalStorageKeys, LocalStrogeService } from "./local-stroge.service";
import { RootURL } from './../Constants';
import { DataResponseModel } from './../Models/dataResponseModel';
import { TokenModel } from './../Models/tokenModel';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../Models/loginModel';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = RootURL+'Auth/';
  
  constructor(private httpClient: HttpClient,
    private localStorageService:LocalStrogeService,
    private router:Router,) {}

  login(user: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', user);
  }

  register(registerModel:RegisterModel):Observable<DataResponseModel<TokenModel>>{
    return this.httpClient.post<DataResponseModel<TokenModel>>(this.apiUrl + "register", registerModel);
  }

  isAuthenticated() {
    return this.localStorageService.contain(LocalStorageKeys.TOKEN)
  }

  authenticate(tokenModel:TokenModel) {
    this.localStorageService.set(LocalStorageKeys.TOKEN, tokenModel.token)
    this.localStorageService.set(LocalStorageKeys.USER, tokenModel.userId)
    this.router.navigate([""])
    window.location.reload()
  }


  logout() {
    this.localStorageService.remove(LocalStorageKeys.TOKEN)
    this.localStorageService.remove(LocalStorageKeys.USER)
    this.router.navigate([""])
  }

}
