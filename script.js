//Variables
let personas = []
const idForm = document.getElementById("idForm")
const botonPersonas = document.getElementById("botonPersonas")
const divPersonas = document.getElementById("divPersonas")
let total = 0

//clases
class Persona {
    constructor(nombre, apellido, edad, localidad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.localidad = localidad
    }
}

if(localStorage.getItem("personas")) { //Verifico si ya existe o no informacion
    personas =  JSON.parse(localStorage.getItem("personas")) 
} else {
    localStorage.setItem("personas", JSON.stringify(personas)) 
}   

//Funciones

idForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)
    const persona = new Persona(datForm.get("nombre"), datForm.get("apellido"), datForm.get("edad"), datForm.get("localidad"))
    
    if ((persona.nombre != "") && (persona.apellido != "") && (persona.edad != 0) && (persona.localidad != "")) { // if que chequea que los datos ingresados sean coherentes
        personas.push(persona)
        localStorage.setItem('personas', JSON.stringify(personas))
    }
    
    idForm.reset()
})

botonPersonas.addEventListener("click", () => {  //Listener para mostrar los personas cargados en la pagina
    const almStorage = JSON.parse(localStorage.getItem('personas'))
    divPersonas.innerHTML = ""
    almStorage.forEach((persona, indice) => {
        divPersonas.innerHTML += `
        <div class="card" id="persona${indice}" style="width: 18rem;margin:3px;">
            <div class="card-body">
                <h5 class="card-title">Persona: ${persona.nombre} ${persona.apellido}</h5>
                <p class="card-text">Edad: ${persona.edad}</p>
                <p class="card-text">Localidad:${persona.localidad}</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `
    })
    almStorage.forEach((persona, indice) => { // forma de llegar al boton eliminar en cada persona
        const tarjetaPersona = document.getElementById(`persona${indice}`)
    
        tarjetaPersona.children[0].children[3].addEventListener('click', () => {
            tarjetaPersona.remove() //DOM
            personas.splice(indice, 1) //Array
            localStorage.setItem('personas', JSON.stringify(personas)) //Local storage
        })
    })  
})




//Main
