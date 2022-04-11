const alunos = ['joao', 'juliana', 'caio', 'ana']

const mediasAlunos = [10, 7, 9, 6]

let listaNotasAlunos = [alunos, mediasAlunos]

 // metodo .INCLUDES busca dentro do array buscando por um valor que passamos por parametro
const exibeNomeNota = (nomeDoAluno) => {
    if(listaNotasAlunos[0].includes(nomeDoAluno)){
        indice = listaNotasAlunos[0].indexOf(nomeDoAluno);
        return listaNotasAlunos[0][indice] + " sua média é " + listaNotasAlunos[1][indice]
    } else {
        return "aluno não cadastrado."
    }
}

console.log(exibeNomeNota("joao"));