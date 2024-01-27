import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn = false;
  loginFailed = false;
  errorMessage = '';
  hide = true;
  submitted = false;
  


  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  get f() { return this.loginForm.controls; }
  
  getErrorMessage() {
    if (this.loginForm.controls.username.hasError('required')) {
      return 'You must enter a value';
    } else {
      return null;
    }

  }


  onSubmit(): void {
    this.submitted = true;
    const username = this.loginForm.get(['username'])?.value;
    const password = this.loginForm.get(['password'])?.value;
    console.log('HERE')
    this.auth.login(username, password).subscribe((data) => {

      if(data.error == 'false'){
        this.router.navigate(['home']);
      } else {
        this.loginFailed = true;
      }
    })
      
    }
  }
