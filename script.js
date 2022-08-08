//FUNCIONES

function verificador (pers) {
    while(isNaN(pers.edad)){
        pers.edad=parseInt(prompt("Ingrese una edad valida"))
    }    
}

function ingresarPersona () {
    const pers = {
        nombre:"",
        apellido:"",
        localidad:"",
        edad:""
    }
    pers.nombre = prompt("Ingrese su nombre:")
    pers.apellido = prompt("ingrese su apellido")
    pers.localidad = prompt("Ingrese su localidad")
    pers.edad = parseInt(prompt("Ingrese su edad"))
    verificador(pers)
    personas.push(pers)
}

function calcularPromedio () {
    for (let i = 0; i < personas.length; i++) {
        total = total + personas[i].edad
    }
    promedio = total/personas.length
}


//VARIABLES

const personas = []
let edad = 0
let total = 0
let promedio = 0

let condicion = "si"

//MAIN

ingresarPersona()
 

while (condicion =="si") {

    condicion = prompt("Ingrese Si si quiere seguir agregando personas:").toLocaleLowerCase()
    if (condicion == "si"){
        ingresarPersona()
    }
}

calcularPromedio()

console.log(promedio)
console.log(personas)