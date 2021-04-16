import { Component , OnInit} from '@angular/core';
import { AppState } from './store/models/app.model';
import {UserAdd } from './store/models/users.model';
import { AddUserAction} from './store/actions/users.action'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   showadd = false;
   isLogged;
   submitted : boolean = false;
   loginForm: FormGroup;
  userslist: Observable<Array<UserAdd>>;
  userinput = {
    email:'',
    password :'',
    id :''
  }

  constructor(private store: Store<AppState>,private fb:FormBuilder,) { 
  this.loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
  })
}
  ngOnInit() {
    this.userslist = this.store.select(store => store.users);
    this.userslist.subscribe(data=>{
      this.isLogged= data;
    })
  }
 
  loginClick(){
    this.submitted = true;
    if(this.loginForm.valid) {
      console.log('valid');
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      this.userinput = {
        email:email,
        password:password,
        id :uuid()
      }
      this.store.dispatch(new AddUserAction(this.userinput));
      this.loginForm.reset();
    }
  }
 
}
