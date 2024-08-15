let operador
let primeroValor
let segundoValor

    
function calculadora (primeroValor, segundoValor, operador) {


       switch (operador) {
       
    
       case "+": 
       operador = primeroValor + segundoValor;
       return operador;

       case "-":
       operador = primeroValor - segundoValor;
       return operador;

       case "*":
       operador = primeroValor * segundoValor;
       return operador;

       case "/":
            operador = primeroValor / segundoValor;
        default:
            return "Operador inválido"
            
}
}

    console.log( calculadora (5, 2, "+") )
