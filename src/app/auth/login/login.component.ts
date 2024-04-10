import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tooltip, initTWE, Input, Ripple } from 'tw-elements';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loginFormPayload: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    initTWE({ Tooltip, Input, Ripple });
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  createLoginPayload() {
    this.loginFormPayload = {
      "ContactNo": this.loginForm.controls['phoneNumber'].value,
      "password": this.loginForm.controls['password'].value
    }
  }

  login() {
    this.createLoginPayload();
    this.authService.login(this.loginFormPayload).subscribe((data) => {
      console.log(data);
    })
  }

  navigateToRegister() {
    this.router.navigate(['../register']);
  }

}
