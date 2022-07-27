function verificador(n1 = 0) {
    while (isNaN(n1)) {
        n1 = parseFloat(prompt("Ingrese por favor una nota valida"))
    }
    nota = n1
}

let condicion = "si"
let nota = 0 
let contador = 0
let total = 0

nota = parseFloat(prompt("Ingrese nota a promediar:"))
while (condicion == "si") {
    
    verificador (nota)
    total += nota
    contador ++

    condicion = prompt("Escriba SI si quiere seguir agregando notas a promediar").toLowerCase()

    if (condicion == "si"){
        nota = parseFloat(prompt("Ingrese nota a promediar:"))

    }else {
        condicion = "no"
    }
}

promedio = total / contador
console.log(promedio)
alert(promedio)