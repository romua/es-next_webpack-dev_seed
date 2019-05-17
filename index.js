import Person from "./src/person/person"

const roma = new Person(new Date(1993, 10, 13), "Chapkailo", "Roman");
console.log(roma);

console.log(roma.age);
const array = [1,2,3,4,5];

console.log('say hello', ...array );