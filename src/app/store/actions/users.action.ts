import { Action, createAction, props } from '@ngrx/store';
import { UserAdd } from '../models/users.model';
export const AddUserAction = createAction(
  '[AddUser] Add User',
  props<{ data: UserAdd }>()
);
export const addUserSucess = createAction(
  '[AddUser] Add User Success',
  props<{ data: UserAdd }>()
);
export const logoutAction = createAction(
  '[AddUser] Logout',
  props<{ data: UserAdd }>()
);

