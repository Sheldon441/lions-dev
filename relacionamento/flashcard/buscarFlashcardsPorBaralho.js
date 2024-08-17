const listarFlashcards = require('../data');

function buscarFlashcardsPorBaralho(baralhoId) {
  const todosOsFlashcards = listarFlashcards();
  
  const flashcardsFiltrados = todosOsFlashcards.filter(flashcard =>
    flashcard.baralhoId === baralhoId
  );
  
  flashcardsFiltrados.forEach(flashcard => {
    console.log(`ID: ${flashcard.id}, Título: ${flashcard.titulo}, Pergunta: ${flashcard.pergunta}`);
  });
}

module.exports = buscarFlashcardsPorBaralho;