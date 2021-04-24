import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../store/models/app.model';
import { DeleteUserAction} from '../store/actions/users.action';
import { getUsersState } from '../store/reducers';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  @Output() public logOutClicked = new EventEmitter<String>();
  userslist: Observable<any>;
  logged: any; 
  constructor(public store: Store<AppState>, private route: Router) { }

  ngOnInit(): void {
    this.userslist = this.store.select(getUsersState
      );
      this.userslist.subscribe(data => {
        this.logged = data;
      });
  }
  navigateToLogin() {
    this.logOutClicked.emit()
  }
}
