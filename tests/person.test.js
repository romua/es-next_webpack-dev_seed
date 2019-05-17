import Person from '../src/person/person';
import { getAgeByBirthDate } from '../src/shared/shared';

describe('test space', () => {

  it('should correctly calculate age', function () {
    expect(getAgeByBirthDate(new Date(1993, 10, 13))).toBe(25)
  });

  it('should return Ok', function () {
    const oldPerson = new Person(new Date(1900, 10, 10), 'Old', 'Person');

    expect(oldPerson.checkAge(new Date(1993, 10, 13))).toBe('Too damn old');
  });

  it('should return Too damn old', function () {
    const youngPerson = new Person(new Date(2010, 10, 10), 'Young', 'Person');
    expect(youngPerson.checkAge(new Date(1993, 10, 13))).toBe('Ok');
  });
});