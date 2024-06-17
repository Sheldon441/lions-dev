let nota1
let nota2
let media 

console.log("Digite uma nota:")
    process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())

console.log("Digite outra nota:")
    process.stdin.once('data', function(data){
    nota2 = parseFloat (data.toString().trim())
    
    processamento (nota1, nota2)
    process.exit()


    })
})

    function processamento(nota1, nota2) {
        
        let media = (nota1 + nota2) /2
        if (media < 8){
            console.log(`Que pena, você ficou para recuperação com a nota: ${media}`)
        }else {
            console.log(`Parabéns, você não ficou para recuperação !`)
        }
    }