// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

let numero = prompt('Ingrese un numero')

if (numero<0) {
    console.log('Numero negativo');
}else{
    if(numero>0){
        console.log('Numero positivo');
    }else{
        console.log('El número es cero');
    }
}

