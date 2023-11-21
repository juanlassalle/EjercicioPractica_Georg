//Crear un programa que pida al usuario un número del 1 al 7 y 
//luego muestre el día de la semana correspondiente.

let numero =parseInt(prompt('Ingrese un número'))

switch (numero) {
    case 1: alert('Domingo')
        break;
    case 2: alert('Lunes')
        break;
    case 3: alert('Martes')
        break;
    case 4: alert('Miércoles')
        break;
    case 5: alert('Jueves')
        break;
    case 6: alert('Viernes')
        break;
    case 7: alert('Sábado')
        break;
    default: alert('Valor no valido')
        break;
     
}