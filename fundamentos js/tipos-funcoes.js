// declaração de função
function soma(a, b){
    return a + b
}

function multiplica(a, b){
    return a * b
}

console.log(soma(1,2))
console.log(multiplica(2,3))

// expressão de função
const soma2 = function(a, b) { return a + b}
console.log(soma2(1, 2));

// arrow function
const arrow = (a, b) => {
    return a / b
}
console.log(arrow(2, 4));