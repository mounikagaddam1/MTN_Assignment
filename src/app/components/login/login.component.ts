import { Component , OnInit} from '@angular/core';
import { AppState } from '../../store/models/app.model';
import {UserAdd } from '../../store/models/users.model';
import { AddUserAction} from '../../store/actions/users.action';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showadd = false;
   isLogged: any;
   submitted = false;
   loginForm: FormGroup;
  userslist: Observable<UserAdd>;
  userinput = {
    email: '',
    password : '',
    id : ''
  };

  constructor(private store: Store<AppState>, private fb: FormBuilder, private route: Router) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
  });
}
  ngOnInit() {
    this.userslist = this.store.select(store => store.users);
    this.userslist.subscribe(data => {
      this.isLogged = data;
    });
  }

  loginClick() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.userinput = {
        email,
        password,
        id : uuid()
      };
      this.submitted = true;
      this.store.dispatch(AddUserAction({data: this.userinput}));
      this.loginForm.reset();
    }
  }

}
