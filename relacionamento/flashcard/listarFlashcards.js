let flashcard = require('../data');

function listarFlashCards() {
  listarBaralho().forEach(flashcard => {
    console.log(`ID: ${flashcard.id}, título: ${flashcard.titulo}`);
  });
}

module.exports = listarFlashCards;