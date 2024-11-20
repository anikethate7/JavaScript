function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Aniket");


function makeTea(tea){
    return `Making ${tea}`;
}

let teaOrder = makeTea("green tea")
console.log(teaOrder)

function orderTea(teaType){
    function cirmfirmOrder(){
        return `order confirmed ${teaType}`;
    }
    return cirmfirmOrder(teaType)
}

let order = orderTea("green tea")
console.log(order)



// Arrow function

const calculateTotal = (price, quantity, ) => {
    return price * quantity
}

console.log(calculateTotal(100, 2));