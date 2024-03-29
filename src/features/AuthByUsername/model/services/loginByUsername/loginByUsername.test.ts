import { TestAsyncThunk } from '../../../../../../config/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from '../../../../../entities/User';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  const userValue = { username: 'user', id: '1' };

  test('should complete successfully', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: userValue.username, password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('should return error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: userValue.username, password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
