const boton1 = document.querySelector("#boton1")

class User {
    constructor(nombre, apellido, localidad, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.localidad = localidad
        this.edad = edad
    }
}

const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")

const users = []

idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const localidad = document.getElementById("localidad").value
    const edad = document.getElementById("edad").value

    const user = new User(nombre, apellido, localidad, edad)

    users.push(user)

    idForm.reset()
    console.log(users)
})


botonUsers.addEventListener('click', () => {
    divUsers.innerHTML = ""
    users.forEach((user, indice) => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">${user.nombre}</h5>
                    <p class="card-text">${user.apellido}</p>
                    <p class="card-text">${user.localidad}</p>
                    <p class="card-text">${user.edad}</p>
                </div>
            </div>
        
        `
    })
})