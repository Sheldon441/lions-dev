let opcao = ["Pedra", "Papel", "Tesoura"]
let escolhaComputador = ""
let escolhaUsuario = ""
let resultado = ""

console.log("Pedra, papel ou tesoura?")

process.stdin.once('data', function(data){
  escolhaUsuario = data.toString().trim()
  processamento (resultado, escolhaComputador, escolhaUsuario)
  process.exit()

})
     function processamento (resultado, escolhaComputador, escolhaUsuario){

     escolhaComputador = opcao[Math.floor(Math.random()* 2 + 1)]
     
     console.log(escolhaComputador)

     if (escolhaUsuario == escolhaComputador){
      console.log("empate")
     }else if (escolhaUsuario == opcao [0] && escolhaComputador == opcao[2] || escolhaUsuario == opcao[2] && escolhaUsuario == opcao[1] || escolhaUsuario == opcao[1] && escolhaUsuario == opcao[0]){
      console.log("Você venceu")
    }else{
      console.log("Você perdeu")
     } 

}
     