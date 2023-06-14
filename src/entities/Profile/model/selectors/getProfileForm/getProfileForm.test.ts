import { DeepPartial } from 'redux';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  const form = {
    username: 'admin',
    age: 22,
    country: Country.Honduras,
    lastName: 'Test LastName',
    first: 'Test FirstName',
    city: 'Test City',
    currency: Currency.EUR,
  };
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
