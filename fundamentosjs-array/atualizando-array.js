const listaDeChamada = [ "joao", "ana", "caio",
"leo","marjorie","lara" ]
console.log(" lista completa" + listaDeChamada)
console.log(listaDeChamada.length)

// metodo Splice() espera 3 argumentos, - 
// 1- apartir de qual indice, 
// 2- quantos serao retirados
// 3- o que será colocado no lugar.
listaDeChamada.splice(1, 0, "rodrigo");
console.log("nao apaga ninguem e coloca o rodrigo  " + listaDeChamada)
console.log(listaDeChamada.length)

listaDeChamada.splice(1, 2);
console.log("apartir do indice 1, nao apaga ninguem e adiciona o pedro" + listaDeChamada)
console.log(listaDeChamada.length)