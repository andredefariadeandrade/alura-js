const nomes = [ "joao", "juliana", "ana", "caio",
"lara","marjorie","gui","aline","fabi",
"andre","carlos","paulo","bia","vivian","isa",
"vini","renan","renata","daisy","camilo" ]

// dividindo um array usando metodo slice(passando onde começa a dividir e onde termina)
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(sala1)
console.log(sala2)