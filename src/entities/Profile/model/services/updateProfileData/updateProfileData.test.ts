import { TestAsyncThunk } from '../../../../../../config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Honduras,
  lastName: 'Test LastName',
  first: 'Test FirstName',
  city: 'Test City',
  currency: Currency.EUR,
};

describe('updateProfileData', () => {
  test('should complete successfully', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('should return server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should return validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, first: undefined } } });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
