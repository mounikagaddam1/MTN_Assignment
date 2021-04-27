import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {
  AddUser(payload): Observable<any> {
    const user = new Observable<Action>((obs) => {
        obs.next(payload);
    });

    return user;

  }
}
