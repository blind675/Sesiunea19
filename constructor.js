const animals = ['oaie', 'gaina'];
console.log(animals);

const animals2 = new Array('oaie2', 'gaiana2');
console.log(animals2);

const obj = new Object();
// const obj = {}
console.log(obj);

function Student(name, age, grade) {
  // this = {}

  this.name = name;
  this.age = age;
  this.grade = grade;

  this.sayHello = function() {
    console.log('hello', this);
  }

  this.average = function() { return this.garde / 3; }

  // return this;
}  

const student1 = new Student("Bob", 24, 8);
console.log(student1);
student1.sayHello();


const student2 = new Student('Ion', 30, 9);
console.log(student2);


function dummyConstructor(name, age, grade) {
  const obj = {
    // name: name,
    name,
    age,
    grade,
    sayHello: function() {
      console.log('hello', this);
    },
    average: function() { return this.garde / 3; }
  }

  return obj;
}

const student3 = dummyConstructor('Ion', 30, 9);
console.log('ultim student: ', student3);