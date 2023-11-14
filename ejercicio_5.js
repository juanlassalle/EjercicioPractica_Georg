// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, 
//como la longitud y la presencia de caracteres especiales.

let password = prompt('Ingrese contraseña')


if ( password.length < 5 ) {
    console.log('La contraseña debe tener al menos 5 caracteres');
}else {
    let caracteres =/[^a-zA-Z0-9]/
    
    if(!caracteres.test(password)){
        console.log('La contraseña debe tener al menos un carácter especial');
    }else{
        console.log('La contraseña es valida');
    }
}



