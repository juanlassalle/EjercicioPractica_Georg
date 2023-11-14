// Crear un programa que pida al usuario un número y luego muestre si es par o impar.

let entrada= prompt('Ingrese un numero')

function parImpar(num) {
    if (num%2===0) {
        console.log('Es Par');
    } else {
        console.log('Es Impar');
    }
}

parImpar(entrada)