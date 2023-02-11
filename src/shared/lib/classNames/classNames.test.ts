import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', ['arrayClass1', 'arrayClass2'])).toBe(
      'someClass arrayClass1 arrayClass2'
    );
  });

  test('with mods', () => {
    expect(
      classNames('someClass', ['arrayClass'], {
        switchedOnClass: true,
        switchedOffClass: false,
      })
    ).toBe('someClass arrayClass switchedOnClass');
  });
});
