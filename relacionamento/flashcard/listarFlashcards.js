let flashcards = require('../data');

function listarFlashCards() {
  flashcards.forEach(flashcard => {
    console.log(`ID: ${flashcard.id}, Título: ${flashcard.titulo}`);
  });
}

module.exports = listarFlashCards;