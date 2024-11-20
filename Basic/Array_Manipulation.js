let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavours[0];
console.log(firstTea);

let city = ["london", "tokiyo", "tea", "paris", "new york"];
let favCity = city[0];
console.log(favCity);

//changing element in an array
teaFlavours[1] = "jasmine tea";
console.log(teaFlavours);

//adding new element using push method
city.push("mumBAI");
console.log(city);

// remove element using pop
let poped = city.pop();
console.log(city);
console.log(poped);

//copy array into another
let newFlavour = teaFlavours;
console.log(newFlavour);
//if we do like this both the array will be updated if we change any of the array
newFlavour.pop();
console.log(newFlavour);
console.log(teaFlavours);
//if dont wnt to do like that then we can do
let flavour = ["green tea", "black tea", "oolong tea"];
let newtea = [...flavour];
flavour.pop();
console.log(newtea);

let epuropianCities = ["paris", "rome"];
let asianCities = ["tokyo", "bankok"];

let EAcities = epuropianCities.concat(asianCities);
console.log(EAcities);
