import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
          Validators.required,
          Validators.email
        ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }


  submitLogin() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.get('email'));
  }

}
