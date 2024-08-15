const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let lembretes = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Adicionar lembrete
	2. Listar todos os lembretes
    3. Editar lembrete
	4. Remover lembrete
	5. Sair
	`)

	rl.question('Escolha um lembrete: ', (opcao) => {
		switch (opcao) {
			case '1':
				adicionarLembrete()
				break
			case '2':
                listarlembretes()
				break
            case '3':
                editarLembrete()
				break
			case '4':
				removerLembretes()
				break	
			case '6':
				sair()
				rl.close()
				break

			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function adicionarLembrete() {
	rl.question('Digite o lembrete: ', (lembrete) => {
		rl.question('Digite o prazo do lembrete: ', (prazo) => {
			rl.question('Está concluída?', (concluído) => {
				lembretes.push({ lembrete: lembrete, prazo: prazo, concluído: concluído })
				console.log('Lembrete adicionado com sucesso!')
				exibirMenu()
			})
		})
	})

}

function listarlembretes(){
    if (lembretes.length == 0){
        console.log("Nenhum lembrete adicionado")
        }else{
            console.log(lembretes)
        }
        exibirMenu()
    }   

function removerLembretes() {
	if (lembretes.length == 0) {
	console.log('Nenhum lembrete.')
	exibirMenu()
	} else {
	console.log('Lista de lembretes')
	lembretes.forEach((lembretes, index) => {
	console.log(`${index + 1}. ${lembretes}`)
	})
	rl.question('Qual lembrete deseja remover?'), (opcao) => {
	if (opcao > 0 && opcao <= lembretes.length) {
	lembretes.splice(opcao - 1, 1)
	console.log('Lembrete removido com sucesso!')
	exibirMenu()
	} else {
	console.log('Lembrete inválido, tente novamente.')
	exibirMenu()
	}
}
	}
}

function editarLembrete() {

	if(lembretes.length == 0){
	   console.log('Nenhum lembrete adicionado')
   exibirMenu()
	}else{
	   console.log(lembretes)

	lembretes.forEach((lembretes, index) => {
	console.log(`${index + 1}. ${lembretes}`)
	})
   rl.question('Digite o lembrete que deseja editar: ', (opcao) => {
	if(opcao > 0 && opcao <= lembretes.length){
   rl.question('Digite o novo lembrete: ', (lembretes) => {
   rl.question('Digite o novo prazo: ', (prazo) => {
	   
	lembretes[opcao -1] = {
	  lembretes,
	  prazo,
	  concluído: false

	})

	  console.log('Editado com sucesso!')
   exibirMenu()
   
   })
   })
   })

   }else{
	   console.log('Lembrete inválido, tente novamente.')
   exibirMenu()
   }
   })
   }
}