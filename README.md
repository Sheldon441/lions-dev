//atualizar sessão
//listar sessão

}else if (case === '3') {
    let cinema = prompt('Qual filme deseja atualizar?');
    const index = parseInt(cinema) - 1;
if (index < 0 ||index >= cinema.length){
    console.log('O filme não foi encontrado.');   
}else{
    let filme = prompt('Digite o nome do filme: ')
    let data = prompt('Digite a data do filme: ');
    let horario = prompt('Digite o horário do filme: ');
    let sala = prompt ('Digite a sala: ');
    cinema[index] = {filme, data, horario, sala};
    console.log('Filme atualizado com sucesso ! ')
}
