// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1: Crear el array donde se guardan los nombres
let amigos = [];

// Paso 2: Agregar un nombre al array
function agregarAmigo() {
    const input = document.getElementById('amigo'); 
    const nombre = input.value; 

    // Agregar el nombre
    amigos.push(nombre);

    // Borrar el nombre
    input.value = ''; 

    // Actualizar la lista visible
    mostrarLista();
}

// Paso 3: Recorrer el array y mostrarlo como <li> dentro de la lista
function mostrarLista() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = ""; // Limpiar datos

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

