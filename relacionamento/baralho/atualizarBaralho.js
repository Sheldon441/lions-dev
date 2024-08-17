let baralho = require('../data');

function atualizarBaralho(index, novoBaralho){
    baralho[index] = novoBaralho;
}

module.exports = atualizarBaralho;