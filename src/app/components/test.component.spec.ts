import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {Router} from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from '../store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let route: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        RouterTestingModule, ReactiveFormsModule,
        StoreModule.forRoot(
            UserReducer
        ),
      ],
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    route = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('navigating to test component', () => {
    spyOn(route, 'navigate').and.stub();
    component.navigateToLogin(345353453);
    fixture.detectChanges();
    expect(route.navigate).toHaveBeenCalledWith(['']);
  });
});
