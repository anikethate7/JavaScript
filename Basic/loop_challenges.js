// // //for-of loop
// // let number  = [1,2,3,4,5]
// // let smal = []

// // for (const nums of number) {
// //     if(nums == 4){
// //         break;
// //     }
// //     smal.push(nums)
// // }
// // console.log(smal);

// // //for-of loop
// // let chai = ["chai","green tea", "herbal tea","black tea"]
// // let prefferesTea = []

// // for (const c of chai) {
// //     if (c == "herbal tea") {
// //         continue;
// //     }
// //     prefferesTea.push(c);
// // }
// // console.log(chai);
// // console.log(prefferesTea);

// // for-in loop

// let citiesPopulation = {
//     "London" : 8900000,
//     "New York" : 8400000,
//     "Paris" : 2200000,
//     "Berlin" : 3500000
// }

// let newPopulation = {}

// // for (const cities in citiesPopulation) {
// //    newPopulation[cities] = citiesPopulation[cities]
// // }
// // console.log(newPopulation);

// for (const city in citiesPopulation) {
//    if (citiesPopulation[city] < 3000000) {
//     continue;
//    }
//    newPopulation[city] = citiesPopulation[city]
// }

// console.log(newPopulation);

let teaC = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTea = [];

teaC.forEach((tea) => {
  if(tea === "chai"){
    return;
  }
  availableTea.push(tea);
});

console.log(availableTea);

