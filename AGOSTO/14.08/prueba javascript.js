/* J1 EJ 1
let dia = prompt ("ingrese un dia")
let mes = prompt ("ingrese un mes")

if (dia == 25 && mes == 'diciembre'){
    console.log ("es navidad! :D")
} else {
    console.log ("no es navidad :(")
}*/


/* EJ 2
let ingreso1 = prompt ("ingrese el primer numero")
let ingreso2 = prompt ("ingrese el segundo numero")
let ingreso3 = prompt ("ingrese el tercer numero")

ingreso1 = parseInt (ingreso1)
ingreso2 = parseInt (ingreso2)
ingreso3 = parseInt (ingreso3)

if (ingreso1 == ingreso2 && ingreso1 == ingreso3) {
    let resultado = (ingreso1 + ingreso2) * ingreso3
    console.log(resultado)
} else {
    console.log ("los numeros no son iguales")
}*/ 


/*EJ 3*/
/*
let ingreso1 = prompt ("ingrese el primer numero")
let ingreso2 = prompt ("ingrese el segundo numero")
let ingreso3 = prompt ("ingrese el tercer numero")

ingreso1 = parseInt (ingreso1)
ingreso2 = parseInt (ingreso2)
ingreso3 = parseInt (ingreso3)

if (ingreso1 < 10 && ingreso2 < 10 && ingreso3 < 10) {
    console.log("Todos los numeros son menores a 10")
    let elemento = document.getElementById("mensaje");
    elemento.innerHTML = "Todos los numeros son menores a 10"
} else {
    console.log ("No todos los numeros son menores a 10")
    let elemento = document.getElementById("mensaje");
    elemento.innerHTML = "No Todos los numeros son menores a 10"
}*/


/* EJ 5
let sueldo = prompt ("ingrese sueldo")
let antiguedad = prompt ("ingrese antiguedad")

sueldo = parseInt(sueldo)
antiguedad = parseInt (antiguedad)

if (sueldo < 500 && antiguedad >= 10) {
    let resultado = sueldo * 1.20 
        console.log (resultado)   
} else if (sueldo < 500 && antiguedad < 10) {
    let resultado2 = sueldo * 1.05 
        console.log (resultado2)        
} else if (sueldo > 500) {
    console.log (sueldo)
}

*/

/* EJ 6*/
/*
let nota1 = prompt('ingrese nota')
let nota2 = prompt('ingrese nota')
let nota3 = prompt('ingrese nota')

nota1 =parseInt(nota1)
nota2 =parseInt(nota2)
nota3 =parseInt(nota3)
 
let resultado = (nota1 + nota2 + nota3) / 3

if (resultado >= 7){
    console.log('aprobado:D')
} else if (resultado < 7) {
    console.log ("marchaste rey")
}
*/
/*ej 7*/

/*
let clave = prompt('ingrese su clave')  
let clave2 = prompt('ingrese su clave')  

if (clave == clave2){
    console.log ("las claves son iguales")
} else {
    console.log ("las claves no son iguales")
}
*/


/*ej8*/
/*
let numero1 = prompt ('ingrese el primer numero')
let numero2 = prompt ('ingrese el segundo numero')

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

if (numero1 > numero2){
    let suma = numero1 + numero2
    let diferencia = numero1 - numero2
    console.log (suma)
    console.log (diferencia)
}else if (numero1 <= numero2) {
    let producto = numero1 * numero2
    let division = numero1 / numero2
    console.log (producto)
    console.log (division)
}
*/

/*ej 9*/

let nota1 = prompt ('ingrese la primer nota')
let nota2 = prompt ('ingrese la segunda nota')
let nota3 = prompt ('ingrese la tercer nota')

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)
let promedio = ((nota1 + nota2 + nota3) / 3)

if (promedio >= 4) {
    console.log ('regular')
} else if(promedio < 4) {
    console.log ('reprobado')
}
