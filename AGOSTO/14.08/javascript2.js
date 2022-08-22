/*ej1*/
/*
let terminos = 0;

for (let i = 1; i<=25; i ++) {
    let resultado = i * 11;
    console.log(resultado);
}*/

/*ej2*/
/*
let valor = 0

while (valor < 500) {
    valor += 8;
    console.log(valor)
}*/

/*ej3*/
/*
let aprobados = [];
let desaprobados = [];

for (let i = 1; i <=10; i++) {
    let nota = prompt ("ingresar nota");
    if (nota>= 7){
        aprobados.push(nota);
    }else {
        desaprobados.push(nota);
    }
}

console.log ("aprobados:"+aprobados.length)
console.log ("no probados:"+desaprobados.length)
*/

/*ej 4*/

//ejercicio con maxi falló
let estaturas = [];
let suma = 0;

for (let i = 0; i < 5; i ++) {
    let estatura = prompt ("ingrese su estatura");
    let estaturaNum = parseInt(estatura,10);
    estaturas.push(estaturaNum);
}


for (let x = 0; estaturas.length - 1; x ++) {
    suma += estaturas[x];
}

let promedio = suma / estaturas.length;

console.log(promedio);
console.log(estaturas);
console.log(suma);



