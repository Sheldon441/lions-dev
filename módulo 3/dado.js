let resposta

console.log("Quantos lados tem o dado?")

process.stdin.once('data', function(data){
    resposta = parseInt(data.toString().trim())
    processamento(resposta)
    process.exit()
})

   function processamento(resposta){
    console.log(`O número do dado é: ${Math.floor(Math.random()* resposta)+ 1}`)
   }