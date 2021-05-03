import {AddUserAction, addUserSucess, logoutAction} from './users.action';

describe('Store- Data- DataActions', () => {
    it('SHOULD create a login action', () => {
      const action = AddUserAction;
      expect(action.type).toEqual( '[AddUser] Add User');
    });
    it('SHOULD create add user sucess', () => {
        const action = addUserSucess;
        expect(action.type).toEqual( '[AddUser] Add User Success');
      });
    it('SHOULD create a logout  action', () => {
        const action = logoutAction;
        expect(action.type).toEqual( '[AddUser] Logout');
      });
});
