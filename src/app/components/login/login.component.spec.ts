import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from 'src/app/store/reducers';
import { LoginComponent } from './login.component';
import {Router} from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
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
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('[email-check] -it will check user email address is invalid', () => {
    const email = component.loginForm.controls.email;
    fixture.detectChanges();
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors.required).toBeTruthy();
    email.setValue('IBM');
    fixture.detectChanges();
    expect(email.errors.email).toBeTruthy();
  });

  it('email- check, it will check user correct email address is entered', () => {
    const email = component.loginForm.controls.email;
    email.setValue('ibm@gmail.com');
    fixture.detectChanges();
    expect(email.errors).toBeNull();
  });

  it('password-check,it will check password errors', () => {
    const password = component.loginForm.controls.password;
    fixture.detectChanges();
    expect(password.errors.required).toBeTruthy();
    password.setValue('1234');
    fixture.detectChanges();
    expect(password.errors.minlength).toBeTruthy();

  });
  it('password-check,it will check password validity', () => {
    const password = component.loginForm.controls.password;
    fixture.detectChanges();
    expect(password.errors.required).toBeTruthy();
    password.setValue('123456');
    fixture.detectChanges();
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  });

  it('form-check, should check form is valid or not if no values entered', () => {
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeFalsy();
});
  it('form-check, should check form is valid or not when values entered', () => {
    component.loginForm.controls.email.setValue('ibm@gmail.com');
    component.loginForm.controls.password.setValue('123456');
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
  });
  it('login submitted', () => {
    component.loginClick();
    fixture.detectChanges();
    expect(component.submitted).toEqual(true);
});
  it('navigating to test component', () => {
  spyOn(route, 'navigate').and.stub();
  component.loginForm.controls.email.setValue('ibm@gmail.com');
  component.loginForm.controls.password.setValue('123456');
  component.loginClick();
  fixture.detectChanges();
  expect(route.navigate).toHaveBeenCalledWith(['/Test']);
});
  it('email error validation', () => {
  component.loginForm.controls.email.setValue('ibm');
  fixture.detectChanges();
  expect(component.loginForm.valid).toBeFalsy();
});
  it('password error validation', () => {
  component.loginForm.controls.password.setValue('1234');
  fixture.detectChanges();
  expect(component.loginForm.valid).toBeFalsy();
});

});
