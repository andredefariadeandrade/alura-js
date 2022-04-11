const java = [7,8,8,7,10,6.5,4,10,7]
const js = [6, 5, 8, 9, 5, 6]
const pt = [7, 3.5, 8, 9.5] 

function mediaSala(notasSala){
    const somaNotas = notasSala.reduce((acum, atual) => 
        atual + acum,0);
        return somaNotas / notasSala.length;
    }


console.log(mediaSala(java))
console.log(mediaSala(js))
console.log(mediaSala(pt))