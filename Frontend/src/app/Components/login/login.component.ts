import { Router } from '@angular/router';
import { LocalStrogeService, LocalStorageKeys } from './../../services/local-stroge.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm:FormGroup

  loggingIn:boolean = false

  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private toastrService:ToastrService,
              private localStorageService:LocalStrogeService,
              private router:Router,
              ) { }


  ngOnInit(): void {
    this.createLoginForm()
  }


  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {
    if(this.loginForm.valid) {
      
      this.loggingIn = true

      console.log(this.loginForm.value)
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.success(response.message)
        this.authService.authenticate(response.data)
      }, errorResponse => {
        this.toastrService.error(errorResponse.error)
      })

      this.loggingIn = false
      
    }
  }

}