import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//services
import { UsersService } from './../../../../../core/services/users/users.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      name: ['', Validators.required],
      email: ['', (Validators.required, Validators.email)],
      password: ['', Validators.required]
    })
  }

  createrUser(){
    const user = {
      name: this.form.get('name')!.value,
      email: this.form.get('email')!.value,
      password: this.form.get('password')!.value,
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=3984',
      role: 'customer'
    }
    this._user.createUser(user).subscribe({
      next: data => {
        if(data) this.route.navigate(['/auth/login'])
      }
    })
  }
}
