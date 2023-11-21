
// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

let numero = parseInt(prompt('Ingrese un número'))

if(numero <= 1) alert('Numero no valido')

for (let index = 2; index <= numero / 2; index++) {
    
    if (numero % index === 0) {
        alert('No es primo')
    }
}

alert('Numero primo')
