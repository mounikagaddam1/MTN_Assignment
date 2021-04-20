import { Component , OnInit} from '@angular/core';
import { AppState } from './store/models/app.model';
import {UserAdd } from './store/models/users.model';
import { AddUserAction} from './store/actions/users.action';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
}
  ngOnInit() {
  }

}
