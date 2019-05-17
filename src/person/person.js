import { getAgeByBirthDate } from '../shared/shared';

export default class Person {
  constructor(birthDate, lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = birthDate;
  }

  get age() {
    return getAgeByBirthDate(this.birthDate);
  }

}

Person.prototype.MAX_AGE = 100;

Person.prototype.checkAge = function () {
  return getAgeByBirthDate(this.birthDate) > this.MAX_AGE ? 'Too damn old' : 'Ok';
};


