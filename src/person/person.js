export default class Person {
  _birthDate;
  _lastName;
  _firstName;

  constructor(birthDate, lastName, firstName) {
    this._lastName = lastName;
    this._firstName = firstName;
    this._birthDate = birthDate;
  }

  get age() {
    return getAge(this._birthDate);
  }
}

export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  console.log(birthDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}