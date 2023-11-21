// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

let numeroA = parseInt(prompt('Primer numero'))
let numeroB = parseInt(prompt('Segundo numero'))
let numeroC = parseInt(prompt('Tercer numero'))

if (numeroA > numeroB && numeroA > numeroC) {
    alert(`El numero: ${numeroA} es mayor`)
} else {
    if(numeroB > numeroA && numeroB > numeroC){
        alert(`El numero: ${numeroB} es mayor`)
    }else{
        alert(`El numero: ${numeroC} es mayor`)
    }   
}