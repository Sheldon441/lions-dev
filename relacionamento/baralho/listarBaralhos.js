let baralho = require('../data');

function listarBaralho() {
  listarBaralho().forEach(baralho => {
    console.log(`ID: ${baralho.id}, título: ${baralho.titulo}`);
  });
}

module.exports = listarBaralho;