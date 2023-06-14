import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Honduras,
  lastName: 'Test LastName',
  first: 'Test FirstName',
  city: 'Test City',
  currency: Currency.EUR,
};

describe('validateProfileData', () => {
  test('should complete successfully', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('should return empty names errors', async () => {
    const result = validateProfileData({ ...data, first: undefined, lastName: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should return incorrect age error', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('should return incorrect country error', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('should return errors', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
