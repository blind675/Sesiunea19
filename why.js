// Cream un obiect reprezentant un student
// Student are 3 proprietati: name, age, grade
// Student are 2 metode: sayHello, average

const student1 = {
  name: 'Bob',
  age: 24,
  garde: 8,
  average: function() { return this.garde / 3; }
};

// Cream un obiect student nou
const student2 = {
  name: 'Ion',
  age: 30,
  garde: 9,
  average: function() { return this.garde / 3; }
};

// Inca unul
const student3 = {
  name: 'Ana',
  age: 19,
  garde: 10,
  average: function() { return this.garde / 3; }
};

student1.average()