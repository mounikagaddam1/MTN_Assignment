import { Component , OnInit} from '@angular/core';
import { AppState } from '../store/models/app.model';
import {UserAdd } from '../store/models/users.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DeleteUserAction} from '../store/actions/users.action';
import { Router } from '@angular/router';
import { getUsersState } from '../store/reducers';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userslist: Observable<any>;
  logged: any;
  constructor(public store: Store<AppState>, private route: Router) { }

  ngOnInit() {
    this.userslist = this.store.select(getUsersState
    );
    this.userslist.subscribe(data => {
      this.logged = data;
    });
  }

  navigateToLogin(id) {
    this.store.dispatch(new DeleteUserAction(id));
    this.route.navigate(['']);
  }
}
