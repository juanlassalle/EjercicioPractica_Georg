//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, 
//"Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, 
//devolver el número.

let numero = parseInt(prompt(`Ingresar un numero`))

function fizzBuzz(num){
    
    if(num%3===0 && num%5===0) {
        return `FizzBuzz`
    }
    if(num%3===0) {
        return `Fizz`
    }
    if(num%5===0){
        return `Buzz`
    }  
    return `Numero ${num}` 

    
}

alert(fizzBuzz(numero))