let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media = 0
let soma = 0 
let notaAlta = notas[0]
let notaBaixa = notas[0]
let notasAcimaDaMedia = 0
let notasAbaixoDaMedia = 0

// A)

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas [i]
    
} 

    media = soma / notas.length

    // B)

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaAlta) {
        notaAlta = notas[i]
    }
    if (notas[i] < notaBaixa) {
        notaBaixa = notas[i]
    }
}

    console.log(notaAlta)
        console.log(notaBaixa)

    // C)

   for (let i = 0; i < notas.length; i++) {
            if (notas[i] > media) {
                notasAcimaDaMedia++
            }
        }

        console.log(`O vetor notas possui ${notasAcimaDaMedia} notas acima da ${media}.`)
        notas.push(10)
        console.log(notas)

        for (let i = 0; i < notas.length; i++) {
            if (notas[i] < 9.5){
                notasAbaixoDaMedia++
            }
        }

        console.log(notasAbaixoDaMedia)