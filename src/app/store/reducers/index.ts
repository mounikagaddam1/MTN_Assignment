import { UserAdd} from '../models/users.model';
import {UserActions, UserActionTypes} from '../actions/users.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// initial store data
const initialState: Array<UserAdd> = [];
// The only reducer we are using for this example
export function UserReducer(state: Array<UserAdd> = initialState, action: UserActions) {
    switch (action.type) {
      case UserActionTypes.ADD_USER :
       return [...state, action.payload];
      case UserActionTypes.DELETE_USER:
        return state.filter(item => item.id !== action.payload);
       default:
         return state;
    }
    
}
export const getUserState = createFeatureSelector<Array<UserAdd>>('users');
debugger;
export const getUsersState = createSelector(
  getUserState,
  (state: Array<UserAdd>) => state['0']
  
);



