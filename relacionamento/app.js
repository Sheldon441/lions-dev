const prompt = require('prompt-sync')();

const criarBaralho = require('./baralho/criarBaralho');
const criarFlashcard = require('./flashcard/criarFlashcard');
const listarBaralhos = require('./baralho/listarBaralhos');
const listarFlashcards = require('./flashcards/listarFlashCards');
const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralho');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const deletarBaralho = require('./baralho/deletarBaralho');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashCardsPorPergunta');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho');

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
    `);
    
    const opcao = prompt('Escolha uma opção:');
    
    switch (opcao) {
        case '1':
            const titulo = prompt('Digite o título do baralho: ');
            criarBaralho({ titulo });
            console.log('Baralho adicionado com sucesso!');
            menu();
            break;
        case '2':
            const pergunta = prompt('Digite a pergunta: ');
            criarFlashcard({ pergunta });
            console.log('Flashcard adicionado com sucesso!');
            menu();
            break;
        case '3':
            listarBaralhos();
            menu();
            break;
        case '4':
            listarFlashcards();
            menu();
            break;
        case '5':
            const baralhoId = prompt('Digite o ID do baralho para listar os flashcards: ');
            listarFlashcardsPorBaralhoId(baralhoId);
            menu();
            break;
        case '6':
            const idBaralhoParaAtualizar = prompt('Digite o ID do baralho que deseja atualizar: ');
            const novoTituloBaralho = prompt('Digite o novo título do baralho: ');
            atualizarBaralho(idBaralhoParaAtualizar, { titulo: novoTituloBaralho });
            console.log('Baralho atualizado com sucesso!');
            menu();
            break;
        case '7':
            const idFlashcardParaAtualizar = prompt('Digite o ID do flashcard que deseja atualizar: ');
            const novaPergunta = prompt('Digite a nova pergunta do flashcard: ');
            atualizarFlashcard(idFlashcardParaAtualizar, { pergunta: novaPergunta });
            console.log('Flashcard atualizado com sucesso!');
            menu();
            break;
        case '8':
            const idBaralhoParaRemover = prompt('Digite o ID do baralho que deseja remover: ');
            deletarBaralho(idBaralhoParaRemover);
            console.log('Baralho removido com sucesso!');
            menu();
            break;
        case '9':
            const idFlashcardParaDeletar = prompt('Digite o ID do flashcard que deseja deletar: ');
            deletarFlashcard(idFlashcardParaDeletar);
            console.log('Flashcard deletado com sucesso!');
            menu();
            break;    
        case '10':
            const perguntaBusca = prompt('Digite a pergunta para buscar flashcards: ');
            buscarFlashcardsPorPergunta(perguntaBusca);
            menu();
            break;
        case '11':
            const idBaralho = prompt('Digite o ID do baralho para buscar seus flashcards: ');
            buscarFlashcardsPorBaralho(idBaralho);
            menu();
            break;
        case '0':
            console.log('O sistema será encerrado.');
            break;
        default:
            console.log('Opção inválida, tente novamente.');
            menu();
            break;
    }
}
