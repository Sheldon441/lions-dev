let numero = [27,10,3,0,20,5,6,3]
let par =[]
let impar = []

numero.push(19)
for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 0) {
        impar.push(numero[i])
    }else{
        par.push(numero[i])
    }
}

    console.log(impar)
    console.log(par)