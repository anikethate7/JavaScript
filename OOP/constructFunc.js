function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model){
     this.make = make;
     this.model = model;
}
let mycar = new Car("Toyota", "Camary");
console.log(mycar);
let myNewcar = new Car("Tata", "Safari");
console.log(myNewcar);
