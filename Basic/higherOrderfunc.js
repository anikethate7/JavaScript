// function makeTea(teaType) {
//     return `Your ${teaType} is ready`;
// }

// function processOrrder(teafunc) {
//     return makeTea("green tea");
// }

// let order = processOrrder(makeTea);
// console.log(order);





function createTeaMaker(name) {
    return function (teaT) {
      return `${name} is making ${teaT}`;
    };
}

let teaMaking = createTeaMaker("Aniket")
console.log(teaMaking("green tea"));
