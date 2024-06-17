const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let jogos = []
let funcionarioMaiorSalario

exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar todos os funcionários
    3. Listar o maior salário
    4. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
                listarFuncionarios()
				break
            case '3':
                exibirMaiorSalario()
                break
            case '4':
                rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})

}

function listarFuncionarios(){
    if (funcionarios.length == 0){
        console.log("Funcionário não cadastrado")
        }else{
            console.log(funcionarios)
        }
        exibirMenu()
    }   

function exibirMaiorSalario(){
    funcionarioMaiorSalario = funcionarios[0]
    
    for(let i = 0; i < funcionarios.length; i++){
    if (funcionarios[i].salario > funcionarioMaiorSalario.salario){ 
    funcionarioMaiorSalario = funcionarios [i]
}
}

console.log(funcionarioMaiorSalario)
exibirMenu()
}