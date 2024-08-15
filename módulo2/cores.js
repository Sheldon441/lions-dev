let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = [ ]
let corDoUsuario
 
console.log("Escreva a sua cor favorita")
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()

}
)
    function processamento (corDoUsuario){
       if (coresFavoritas.includes(corDoUsuario)){
        console.log(`A sua cor ${corDoUsuario} está entre as cores favoritas ${coresFavoritas} da turma !`)
       }else{
        console.log(`A sua cor ${corDoUsuario} não está entre as cores favoritas  ${coresFavoritas} da turma, vamos colocar no banco de dados`)
        
        coresEspeciais.push(corDoUsuario)
        }

            console.log(coresEspeciais)
            console.log(coresFavoritas.length)
        
       }    
    

       
