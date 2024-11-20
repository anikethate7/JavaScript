// while loop for factorial of 5
function factorial(n) {
  let fact = 1;
  let i = 1;
  while (i <= n) {
    fact *= i;
    i++;
  }
  return fact;
}

let n = 5
 console.log(factorial(n));

 //recurrsive approach

 function facto(n){
    if(n == 0) {
        return 1
    }
    return n * facto(n-1)
 }
 
 console.log(facto(n));

 // next que
let j = 5;
 let coundown = [];
 while(j > 0){
    coundown.push(j);
    j--;
 }
 console.log(coundown);

 //add no.upto 5
let sum = 0
let i = 0
 do {
    sum += i;
    i++
 } while (i<=5);
 
 console.log(sum);
 
let mulArray = [2,4,6]
let multino = []
for(let i = 0; i<mulArray.length;i++){
    multino[i] = mulArray[i]*2;
}
console.log(multino);
