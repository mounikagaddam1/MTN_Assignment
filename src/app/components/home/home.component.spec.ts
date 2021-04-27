import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Router} from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from '../../store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AddUserAction, logoutAction } from '../../store/actions/users.action';
import { UserAdd } from '../../store/models/users.model';
import {Store} from '@ngrx/store';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let route: Router;
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        RouterTestingModule, ReactiveFormsModule,
        StoreModule.forRoot(
            UserReducer
        ),
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    route = TestBed.inject(Router);
    store = TestBed.inject(Store);
  });
  it('should create the app', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('navigating to home component', () => {
    spyOn(route, 'navigate').and.stub();
    const object = {
      email: '',
      password: '',
      id: ''
    };
    store.dispatch(logoutAction({data: object}));
    component.navigateToLogin();
    fixture.detectChanges();
    expect(route.navigate).toHaveBeenCalledWith(['']);
  });
});
