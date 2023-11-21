// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. 
//Un número perfecto es aquel que es igual a la suma de sus divisores propios.

let numero = parseInt(prompt('Ingrese un numero: '))

let contador = 0

for(let i = numero - 1 ; i > 0 ; i--){
    if (numero % i === 0) {
       contador = contador + i
    }
}

//contador = contador - numero

if(numero == contador){
    alert(`El numero ${numero} es perfecto`)
}else{
    alert(`El numero ${numero} no es perfecto`)
}