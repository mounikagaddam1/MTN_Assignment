import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MockServiceService } from '../mock-service.service';
import * as useraction from './actions/users.action';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Injectable()
export class UserEffects {
    constructor(private actions: Actions, private mocservice: MockServiceService, private router: Router) {

    }
    $addUser = createEffect(() =>
    this.actions.pipe(
      ofType(useraction.AddUserAction),
      mergeMap((action) => {
        return this.mocservice.AddUser(action.data).pipe(
          map(res => {
            return useraction.addUserSucess({data: res});
          } ),
        );
      }
       )
    )
  );
  $addUserSucess = createEffect(() =>
  this.actions.pipe(
    ofType(useraction.addUserSucess),
    tap(() => {this.router.navigate(['Home']);
               return true;
  } )
  ), { dispatch: false
 }
);


}


