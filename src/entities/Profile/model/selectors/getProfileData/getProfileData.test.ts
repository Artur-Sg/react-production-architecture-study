import { DeepPartial } from 'redux';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  const data = {
    username: 'admin',
    age: 22,
    country: Country.Honduras,
    lastName: 'Test LastName',
    first: 'Test FirstName',
    city: 'Test City',
    currency: Currency.EUR,
  };
  test('should return profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
