import { TestAsyncThunk } from '../../../../../../config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Honduras,
  lastName: 'Test LastName',
  first: 'Test FirstName',
  city: 'Test City',
  currency: Currency.EUR,
};

describe('fetchProfileData', () => {
  test('should complete successfully', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('should return error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
