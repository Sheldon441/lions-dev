const prompt = require('prompt-sync')();

const criarBaralho = require('./baralho/criarBaralho');
const removerBaralho = require('./baralho/removerBaralho');
const listarBaralho = require('./baralho/listarBaralhos');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const atualizarFlashcard = require ('./flashcard/atualizarFlashcard');
const buscarFlashcardsPorBaralho = require ('./flashcard/buscarFlashcardsPorBaralho');
const buscarFlashcardsPorPergunta = require ('./flashcard/buscarFlashCardsPorPergunta');
const criarFlashcard= require ('./flashcard/criarFlashcard');
const deletarFlashcard = require ('./flashcard/deletarFlashcard');
const findFlashcardIndexById = require ('./flashcard/listarFlashcardIndexById');
const listarFlashcards = require ('./flashcards/listarFlashCards');
const listarFlashcardsPorBaralhoId = require ('./flashcard/listarFlashcardsPorBaralho');

menu();


  function menu() {

    console.log(`
    
    Escolha uma opção:

    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
   10. Buscar Flashcards por Pergunta
   11. Buscar Flashcards por Baralho
   0. Sair

    `)
    const opcao = prompt ('Escolha uma opção:')
    
    let index;

    switch (opcao) {

      case '1':
            const titulo = prompt('Digite o título do baralho ');
                    criarBaralho({ titulo });
                      console.log('Baralho adicionado com sucesso !');
                        menu();
                          break;
        case '2':
            listarFlashcards();
              const pergunta = prompt('Digite a pergunta: ');
                    criarFlashcard({ pergunta });
                      console.log('Pergunta adicionada com sucesso !');
                        menu();
                        break;
        case '3':
            listarBaralhos();
               const novoTitulo = prompt('Digite o título do baralho: ');
                    atualizar(index, { titulo: novoTitulo }); //id antes do novo baralho
                    console.log('Baralho atualizado com sucesso !')
                    menu();
                    break;
        case '4':
            
            break;    
        default:
            console.log('Opção inválida, tente novamente.');
            menu();

}
}

                   const novaPergunta = prompt('Digite a nova pergunta do flashcard: ');
                   atualizar(index, { pergunta: novaPergunta }); //id antes do novo baralho
                   console.log('Pergunta atualizada com sucesso !')
                   menu();
                   break;