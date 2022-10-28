class Student {
  // this = {}

  // Spre deosebire de functia constructor, intr-o clasa primirea de parametri si initializarea atributelor se face intr-o metoda, numita constructor.
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  sayHello = function() {
    this.newValue = 15;
    console.log('hello');
  }

  // Intr-o clasa metodele create de noi nu mai sunt puse pe prototype, ci sunt declarate ca niste functii normale.
  average() { return this.garde / 3; }

  // public / private myAge = 100;
  // return this
}

// Cum cream obiectele? la fel ca la o functie constructor!
const student1 = new Student("Bob", 35, 8);
console.log(student1);

student1.sayHello();

console.log('ceva', 'sdsd', )
