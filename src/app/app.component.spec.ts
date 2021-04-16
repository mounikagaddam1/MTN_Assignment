import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule ,Store} from '@ngrx/store';
import { UserReducer } from './store/reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,ReactiveFormsModule,
        StoreModule.forRoot(
            UserReducer
        ),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
   
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('[email-check] -it will check user email address is invalid',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let email= app.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('IBM');
    expect(email.errors['email']).toBeTruthy();
  });

  it('email- check, it will check user correct email address is entered',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let email = app.loginForm.controls['email'];
    email.setValue('ibm@gmail.com')
    expect(email.errors).toBeNull();
  });

  it('password-check,it will check password errors',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let password= app.loginForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('1234');
    expect(password.errors['minlength']).toBeTruthy();

  });
  it('password-check,it will check password validity',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let password= app.loginForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('123456');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  });

it('form-check, should check form is valid or not if no values entered',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
expect(app.loginForm.valid).toBeFalsy();
});
it('form-check, should check form is valid or not when values entered',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  app.loginForm.controls['email'].setValue('ibm@gmail.com')
  app.loginForm.controls['password'].setValue('123456')
  expect(app.loginForm.valid).toBeTruthy();
  });
it('login submitted',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  app.loginClick();
  fixture.detectChanges();
  expect(app.submitted).toEqual(true);
})
});
