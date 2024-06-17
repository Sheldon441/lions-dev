let caracteres = "SAmLdFp8547910"
let senha = ""
let comprimentoSenha = ""
let numero

console.log("Qual o comprimeto da senha?")

process.stdin.once('data', function(data){
    comprimentoSenha = parseInt(data.toString().trim())
    processamento (caracteres, senha, comprimentoSenha)
    process.exit()

})

function processamento (caracteres, senha, comprimentoSenha){
    for (let i = 0; i < comprimentoSenha; i++){
    numero = Math.floor(Math.random()* caracteres.length + 1)
    senha = senha + caracteres.charAt(numero)
        
    }
    console.log("A sua senha alatória é:" + senha)
    process.exit()
}