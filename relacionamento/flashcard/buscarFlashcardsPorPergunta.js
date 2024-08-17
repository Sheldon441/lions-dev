const flashcards = require('../data'); 

function buscarFlashcardsPorPergunta(pergunta) {

const flashcardsFiltrados = flashcards.filter(flashcard =>
flashcard.pergunta.includes(pergunta)

);
  
flashcardsFiltrados.forEach(flashcard => {
console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`);
  
});
}

module.exports = buscarFlashcardsPorPergunta;