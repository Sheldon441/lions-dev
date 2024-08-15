function calculadora (primeroValor, segundoValor, operador) {
    if (operador == '+'){ 
        return primeroValor + segundoValor
    }else if (operador == "-") {
        return primeroValor - segundoValor 
    }else if (operador == "*"){
        return primeroValor * segundoValor
    }else if(operador == "/"){
        return primeroValor / segundoValor
    }
}
     
console.log(calculadora(5, 2, "+"))
console.log(calculadora(5, 2, "-"))
console.log(calculadora(5, 2, "*"))
console.log(calculadora(5, 2, "/"))