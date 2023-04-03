import { DeepPartial } from 'redux';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', async () => {
    const state: DeepPartial<LoginSchema> = { username: 'username' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('username'))).toEqual({
      username: 'username',
    });
  });

  test('should return password', async () => {
    const state: DeepPartial<LoginSchema> = { password: 'password' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password'))).toEqual({
      password: 'password',
    });
  });
});
