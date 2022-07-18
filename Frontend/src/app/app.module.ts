import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {FormsModule,ReactiveFormsModule  } from "@angular/forms";
import {BrowserAnimationsModule  } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { ToastrModule } from "ngx-toastr";
import { RegisterComponent } from './Components/register/register.component';
import { AuthInterceptor } from "./Interceptors/auth.interceptor";
import { ValidateDirective } from './Directives/validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidateDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
