let nota
let classificação

console.log("Digite a nota:")
    

process.stdin.once('data', function(data){
    nota = parseFloat (data.toString().trim())
    console.log(`Sua nota ${verificar(nota)}`)
    
    classificação = verificar (nota)
    if (classificação == "A" || classificação == "B" || classificação == "C") {
        console.log(`Parabéns você foi aprovado com nota ${classificação}`)
    }else if (classificação == "D" || classificação == "F"){
        console.log(`Que pena, você ficou para recuperação, pois sua nota foi ${classificação}`)
    }else{ 
        console.log(`Essa nota é ${classificação} inválida`)
    }
    
    process.exit()
}
)

function verificar (nota) {


    switch (true) {
    
 
    case (nota >= 90 && nota <= 100): 
    return "A";

    case (nota >= 80 && nota <= 89):
    return "B";

    case (nota >= 70 && nota <= 79):
    return "C";

    case (nota >= 60 && nota <= 69):
    return "D"
    
    case (nota >= 0 && nota <= 59):
     return "F"
    
     default:
         return ("nota inválida")
         
}
}