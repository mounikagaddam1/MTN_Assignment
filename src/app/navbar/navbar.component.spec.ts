import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { Store, StoreModule } from '@ngrx/store';
import { UserReducer } from '../store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let route: Router;
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(
            UserReducer
        ),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    route = TestBed.inject(Router);
    store = TestBed.inject(Store);
  });
  it('navigate to login', () => {
    spyOn(route, 'navigate').and.stub();
    component.navigateToLogin();
    fixture.detectChanges();
    expect(route.navigate).toHaveBeenCalledWith(['']);
  });

});
