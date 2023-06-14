import { DeepPartial } from 'redux';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return empty array', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });

  test('should return validateErrors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.NO_DATA,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
