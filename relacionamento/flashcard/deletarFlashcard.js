let flashcard = require('../data');

function deletarFlashcard(index){
    flashcard.splice (index,1);
 }
 
 module.exports = deletarFlashcard;