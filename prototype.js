function Car(name, brand) {
  // this = {}
  
  this.name = name;
  this.brand = brand;

  //return this
}


const car = new Car('Ford','Mustang');

car.getDescription = function () {
  return `I am a ${this.name} of type ${this.brand}`;
}

// console.log(car.getDescription());
console.log(car);

const car2 = new Car('Dacia', 'Logan');
console.log(car2);

Car.prototype.sayHello = function () {
  console.log('Hello');
}

car.sayHello();

Car.prototype.changeBrand = function (newBrand) {
  this.brand = newBrand;
}

car.changeBrand('Focus');

console.log(car);

Array.prototype.getFirst = function () {
  return this[0];
}

const animals = ['oaie', 'capra'];

console.log(animals.getFirst());
