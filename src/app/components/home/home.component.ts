import { Component , OnInit} from '@angular/core';
import { AppState } from '../../store/models/app.model';
import {UserAdd } from '../../store/models/users.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { logoutAction} from '../../store/actions/users.action';
import { Router } from '@angular/router';
import { getUsersState } from '../../store/reducers';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userslist: Observable<any>;
  logged: any;
  constructor(public store: Store<AppState>, private route: Router) { }

  ngOnInit() {
    this.userslist = this.store.select(getUsersState
    );
    this.userslist.subscribe(data => {
      this.logged = data;
    });
    console.log('logged', this.logged);
  }

  navigateToLogin() {
    const object = {
      email: '',
      password: '',
      id: ''
    };
    this.store.dispatch(logoutAction({data: object}));

    this.route.navigate(['']);
  }
}
