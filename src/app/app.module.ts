import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importing the store
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/reducers';
import { TestComponent } from './components/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {UserEffects} from './store/user.effects';
import { EffectsModule } from '@ngrx/effects';
@NgModule({

  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({
      users : UserReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
