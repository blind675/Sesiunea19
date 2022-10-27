class Car {
  constructor(name) {
    this.name = name;
  }

  // present = function () {}
  present() {
    return 'I am a ' + this.name;
  }
}

// Car.prototype.setBrand = function (brand) {
//   this.brand = brand;
// }

class Model extends Car {
  constructor(name, brand) {
    super(name);
    
    this.brand = brand;
  }

  /* private / public */ show() {
    return this.present() + ' and my type is ' + this.brand;
  }
}

const private = 100;

class SportCar extends Model {

}

const myModel = new Model("Dacia", "Logan");

