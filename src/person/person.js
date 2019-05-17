import { getAgeByBirthDate } from '../shared/shared';

export default class Person {
  constructor(birthDate, lastName, firstName) {
    this._lastName = lastName;
    this._firstName = firstName;
    this._birthDate = birthDate;
  }

  get age() {
    return getAgeByBirthDate(this._birthDate);
  }

}

Person.prototype.MAX_AGE = 100;

Person.prototype.checkAge = function () {
  return getAgeByBirthDate(this._birthDate) > this.MAX_AGE ? 'Too damn old' : 'Ok';
};

