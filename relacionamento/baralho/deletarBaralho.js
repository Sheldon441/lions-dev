let baralho = require('../data');

function deletarBaralho(index){
    baralho.splice (index,1);
 }
 
 module.exports = deletarBaralho;