// Crear un programa que pida al usuario una calificación y luego muestre si 
//es aprobatoria o no (nota mínima para aprobar es 70).

let calificación = prompt('Ingrese calificacion')

let aprobado = 'Materia aprobada'
let desaprobado ='Materia desaprobada'

if (calificación>=70) {
    alert(aprobado)
    
}else{
    alert(desaprobado)
}