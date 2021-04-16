import { Component , OnInit} from '@angular/core';
import { AppState } from '../store/models/app.model';
import {UserAdd } from '../store/models/users.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DeleteUserAction} from '../store/actions/users.action'
@Component({
  selector: 'testcomponent',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userslist: Observable<Array<UserAdd>>;
  logged:any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userslist = this.store.select(store => store.users);
    this.userslist.subscribe(data=>{
      this.logged= data;
    })
  }
 
  navigateToLogin(id){
    this.store.dispatch(new DeleteUserAction(id));
  }
}
