let flashcard = require('../data');

function atualizarFlashcard(index, novoFlashcard){
    flashcard[index] = novoFlashcard;
}

module.exports = atualizarFlashcard;