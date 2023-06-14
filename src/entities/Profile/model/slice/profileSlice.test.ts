import { DeepPartial } from 'redux';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { updateProfileData } from '../services';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Honduras,
  lastName: 'Test LastName',
  first: 'Test FirstName',
  city: 'Test City',
  currency: Currency.EUR,
};

describe('profileSlice', () => {
  test('test setReadonly', async () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('test cancelEdit', async () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' }, readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });

  test('test updateProfile', async () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123' }))).toEqual({
      form: { username: '123' },
    });
  });

  test('test updateProfile service pending', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test updateProfile service fullfield', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
