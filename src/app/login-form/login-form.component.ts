import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  userEmail: FormControl;
  userPass: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.userEmail = new FormControl('', Validators.compose(
      [Validators.required, Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]
    ));
    this.userPass = new FormControl('', Validators.compose(
      [Validators.required, Validators.minLength(6), Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]
    ));
    this.loginForm = new FormGroup({
      email: this.userEmail,
      pass: this.userPass
    });
  }

  onLogin() {

  }

}

