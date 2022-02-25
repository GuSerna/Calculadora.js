# Calculadora.js
Calculadora em javascript

function calculadora (n1, n2, conta){
    if (conta == 'soma') {
        return(n1 + n2)
            
    }    
    else if  (conta == 'subtração'){
        return(n1 - n2)

    }                
    else if (conta == 'divisao'){
        return(n1 / n2)
 
        }
    else if (conta == 'multiplicação'){
       return (n1 * n2)
        
    }
   
}
let calc = calculadora(1,2,'multiplicação')
console.log(calc)
