import Person from '../person/person'

export default class Employee extends Person {
  constructor(salary, position) {
    super(null, 'Roman');
    this.salary = '$1000';
    this.position = 'FrontEnd developer';
  }
  
  getRepresentation() {
    return `${this.position}, ${this.lastName} ${this.firstName}`
  }
}