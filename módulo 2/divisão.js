var numero

console.log("Digite um número:")

process.stdin.once('data', function(data){
    numero = parseFloat (data.toString().trim())
    processamento(numero)

    process.exit()
}
)

function processamento (numero) {
    
  if (numero % 5 ==0){
     console.log("O numero que você digitou é divisível por cinco")
}else{
    console.log("O numero que você digitou não é divisível por cinco")
    
  }
}