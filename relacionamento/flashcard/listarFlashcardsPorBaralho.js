const flashcard = require('../data');

function listarFlashcardsPorBaralho(baralhoId) {
const todosOsFlashcards = flashcard.listarBaralho(); 
const flashcardsPorFiltro = mostrarFlashcards.filter(flashcard => flashcard.baralhoId === baralhoId);

flashcardsPorFiltro.forEach(flashcard => {

console.log(`ID: ${flashcard.id}, título: ${flashcard.titulo}`);

});
}

module.exports = listarFlashcardsPorBaralho;