// Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si
// la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

let cadena = prompt('Ingresar un palabra')

function esPalindromo(cad) {
    let reverso
    for(let i=cad.length - 1;i>=0; i--){
        reverso = cad.at(i)
    }  
    if (cad !==reverso ) {
        console.log('Es palindromo');
    }else{
        console.log('no es palindromo');
    }
    
}
esPalindromo(cadena)