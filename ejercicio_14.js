// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

let letra = prompt('Ingrese una letra')

let regex = /^[a-zA-Z]$/;

if (regex.test(letra)) {
    if (letra === letra.toUpperCase()) {
        alert('Letra mayúscula');
    } else if (letra === letra.toLowerCase()) {
        alert('Letra minúscula');
    }
} else {
    alert('Caracter no válido');
}