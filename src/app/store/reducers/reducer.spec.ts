import {UserReducer} from './index';
import {getUsersState} from './index';
describe('Store reducer', () => {
    it('SHOULD create a reducer', () => {
      expect(UserReducer).toBeTruthy();
    });

});
describe('Store selector', () => {
    it('SHOULD create a selector', () => {
      expect(getUsersState).toBeTruthy();
    });

});
