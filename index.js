const Person = require("./person").Person;

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.greet()); // Hello, my name is Alice and I am 30 years old.
console.log(person2.greet()); // Hello, my name is Bob and I am 25 years old.