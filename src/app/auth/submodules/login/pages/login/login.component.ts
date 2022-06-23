import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//services
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private _auth: AuthService,
    private _user: UsersService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.fb.group({
      email: ['', (Validators.required, Validators.email)],
      password: ['', Validators.required]
    })
  }

  loginUser(){
    this._auth.loginAndGetProfile(
      this.form.get('email')!.value, 
      this.form.get('password')!.value
    ).subscribe()
  }
}
