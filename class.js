class Student {
  // this = {}
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  sayHello = function() {
    this.newValue = 15;
    console.log('hello');
  }

  average = function() { return this.garde / 3; }

  // public / private myAge = 100;
  // return this
}

const student1 = new Student("Bob", 35, 8);
console.log(student1);

student1.sayHello();

console.log('ceva', 'sdsd', )
