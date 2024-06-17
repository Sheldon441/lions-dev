let prova1
let prova2
let media = []

console.log("Digite uma nota:")
    process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())

console.log("Digite outra nota:")
    process.stdin.once('data', function(data){
    prova2 = parseFloat (data.toString().trim())
    
    processamento (prova1, prova2)
    process.exit()


    })
})

    function processamento(prova1, prova2) {
        media.push(prova1, prova2)
        let calculo = (media[0] + media [1]) /2
        console.log(`a sua media é ${calculo}`)
    }