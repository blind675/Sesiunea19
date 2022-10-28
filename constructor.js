// Deja am folosit functii constructor, fara sa stim!
const animals = ['oaie', 'gaina'];
console.log(animals);
// Notatia cu [] e un syntactic sugar (sintaxa alternativa mai concisa). In spate se apeleaza functia constructor Array. 
const animals2 = new Array('oaie2', 'gaiana2');
console.log(animals2);

const obj = new Object();
// const obj = {}
console.log(obj);

function Student(name, age, grade) {
  // Prin faptul ca funcia Student va fi apelata cu cuvantul cheie new, se intampla niste lucruri importante:
	// 1. Este initializat this. Practic, in interiorul functiei e introdusa urmatoarea linie de cod:
  // this = {}

  this.name = name;
  this.age = age;
  this.grade = grade;

  this.sayHello = function() {
    console.log('hello', this);
  }

  this.average = function() { return this.garde / 3; }
  // 2. La finalul functiei este returnat this. Practic, este introdusa urmatoarea linie de cod:
  // return this;
}  

// Cuvantul cheie new este esential. El creaza un obiect nou, initailizeaza si returneaza this-ul.
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