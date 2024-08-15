var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares = 0
var mediaImpares = 0


        for (let i = 0; i <= 999; i++) {
        
        if (i % 2 == 0) {
          somaPares+=i   
          totalPares++
        }else{
          somaImpares+= i 
          totalImpares++
    
        }
        }
            
          mediaPares = somaPares/totalPares

          mediaImpares= somaImpares/totalImpares
          console.log(`a soma de números pares é: ${somaPares}`)
          console.log(`a soma de números ímpares é: ${somaImpares}`)
          console.log(`o total de números pares é: ${totalPares}`)
          console.log(`o total de números ímpares é: ${totalImpares}`)
          console.log(`a média dos números pares é: ${mediaPares}`)
          console.log(`a média dos numeros ímpares é: ${mediaImpares}`)

          if (totalPares > totalImpares) {
            console.log(`o total dos números ímpares é maior que dos números ímpares`)
          }else if (totalImpares > totalPares) {
            console.log(`o total dos números pares é maior que dos números ímpares`)
          }else {
            
          }
          
            


         
        