// tipo de dado
// booleanos

// conversão implicita
const num = 123;
const num2 = "123";

console.log(num === num2);
console.log(num == num2);
console.log(num + num2);

// conversão explicita

// Number()
console.log(num + Number(num2));
// String()
console.log(String(num) + num2);