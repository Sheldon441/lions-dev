// Questão 7

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

    // Parte 3



    // Questão 2
        
        let par 
        let resposta

          if(resposta == "sim"){
            par = true
          }else{
            par = false
          }
          if (par == true){
          console.log("Esse número é par")
          }else{
          console.log("Esse número não é par")
          }

    // Questão 6

       let números = [1,2,3,4,5]
       let ímpares = []

       for(let i = 0; i < números.length; i++){
        if (números [i] % 2 == 0){
            ímpares.push(números[i])
        }
       }
          console.log(ímpares)
     
    // Questão 7 - Parte 3

    /* A)

     Uma array foi criada para armazenar as notas que mais para a frente será representado pela variável [i],
     usada para puxar todos os valores que estão dentro da array, se notas i for menor do que notas.length,
     adicione mais um número. */

     /* B)

     let notas pode ser entrada.
     console.log pode ser saída.
     for pode ser saída. /*

     /* C)
    
     let notas armazena todos os notas escolhidas.
     let soma fará a soma da array.
     let média fará a média da array.
     let i vai representar todos os números da array.
     let notaAlta irá apresentar a nota mais alta.
     let notaBaixa irá apresentar a nota mais baixa.
     let aprovados irá apresentar a nota acima da média.
     let reprovados irá apresentar a nota abaixo da média.

     Questão 4
     
     let idade = 18
     let mensagem

     if(idade >= 16){
        mensagem = "Você poderá votar"
     }else{
        mensagem = "Você não poderá votar"
     }
        console.log(mensagem) 
