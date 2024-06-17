let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media = 0
let soma = 0 
let notaAlta = notas[0]
let notaBaixa = notas[0]
let aprovados = 0
let reprovados = 0


    // A)

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas [i]
    
} 

    media = soma / notas.length

    console.log(`A média das notas é: ${media} `)

    // B)

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaAlta) {
        notaAlta = notas[i]
    }
    if (notas[i] < notaBaixa) {
        notaBaixa = notas[i]
    }
}

    console.log(`A nota mais alta foi: ${notaAlta}`)
        console.log(`A nota mais baixa foi: ${notaBaixa}`)

    
   // C)

for (let i = 0; i < notas.length; i++) {
            if (notas[i] > media) {
                aprovados++
            }
        }

        console.log(`O vetor notas possui ${aprovados} notas acima da média ${media}`)
     
    // D)
        
        notas.push(9.2)
        console.log(`Uma nova nota será adicionada: ${notas}`)

    //  E)

for (let i = 0; i < notas.length; i++) {
            if (notas[i] < 6.0){
                reprovados++
            }
        }

        console.log(`O número de reprovados foi: ${reprovados}`)