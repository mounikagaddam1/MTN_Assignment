import { UserAdd} from '../models/users.model';
import * as useraction from '../actions/users.action';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

// initial store data
const initialState: UserAdd = {email: '', password: '', id: ''};
// The only reducer we are using for this example
export const UserReducer = createReducer(
  initialState,
  on(useraction.addUserSucess, useraction.logoutAction, (state, action) => {
    return {
        state,
      email: action.data.email,
      password: action.data.password,
      id: action.data.id
      };
  }),
);
export const getUserState = createFeatureSelector<UserAdd>('users');
export const getUsersState = createSelector(
  getUserState,
  (state: UserAdd) => state

);



