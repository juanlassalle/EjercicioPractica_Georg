// Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o
// "Impar" si no lo es.

function parImpar(numero) {
    if (numero%2===0) {
        console.log('Par');
    }else{
        console.log('Impar');
    }
}

for (let num = 0; num <= 10; num++) {
    
    parImpar(num)
}
