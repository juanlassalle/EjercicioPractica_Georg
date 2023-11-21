// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

let numerosA = parseInt(prompt('Ingresar primer numero'))

let numerosB = parseInt(prompt('Ingresar segundo numero'))

let suma = numerosA + numerosB

if(suma > 100) {
    alert('suma mayor a 100')
}else{
    if(suma < 100){
        alert('Suma menor a 100')
    }else{
        alert('Suma igual a 100')
    }
}