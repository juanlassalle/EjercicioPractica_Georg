//Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante

let letra = prompt('Ingrese un letra: ')

letra = letra.toLowerCase()
const vocales = ['a','e','i','o','u']

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    alert('Es vocal')

}else {
    if (letra>= 'a' && letra <= 'z' && !vocales.includes(letra)) {
        alert('Es consonate')
    }else{
        alert('Caracter no valido')
    }
}
