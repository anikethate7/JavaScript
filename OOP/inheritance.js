//Inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritance example`;
  }
}

let mycar = new Car("Toyota", "Corolla");
// console.log(mycar.start());
// console.log(mycar.drive());
let veh1 = new Vehicle("Toyota", "Corolla");
console.log(veh1.make);

//Encapsulation
class BankAccount {
  #bal = 0;

  deposite(amount) {
    this.#bal += amount;
    return this.#bal;
  }

  getBal() {
    return `$${this.#bal}`;
  }
}

let acc = new BankAccount();
acc.deposite(10);
console.log(acc.getBal());

//Abstraction

class CoffeMachine {
  start() {
    return `Starting machine`;
  }

  brewCoffe() {
    return `Brewing A coffe`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffe();
    return `${msg1} + ${msg2}`;
  }
}

let mymac = new CoffeMachine();
console.log(mymac.pressStartButton());

//Polomorphism
class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Peguine cant fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//Static Method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
let mycal = new Calculator();
// console.log(mycal.add(2, 3));   this cannot be done because static function can only be accesd by class
console.log(Calculator.add(2, 3));

// getter and setter

class Employee {
  #sal;
  constructor(name, sal) {
    this.name = name;
    this.#sal = sal;
  }

  get sal() {
    return `You are not allowed to see Salary`;
  }

  set sal(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._sal = value;
    }
  }
}
let emp = new Employee("Alice", 50000)
console.log(emp.sal);

