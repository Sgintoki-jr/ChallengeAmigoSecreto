// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1: Crear el array donde se guardan los nombres
let amigos = [];

// Paso 2: Agregar un nombre al array, modificado para validar nombre
function agregarAmigo() {
    const input = document.getElementById('amigo'); 
    const nombre = input.value.trim(); // quitamos espacios extra

    // Revisar que no esté vacío
    if (nombre == '') {
        alert('Por favor, escribe un nombre');
        return;
    }

    // Verificar que no se repita el nombre
    if (amigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista');
        input.value = ''; 
        return;
    }

    // Agregar el nombre
    amigos.push(nombre);
    input.value = ''; 
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

// Paso 4: Seleccionar un amigo aleatorio y mostrarlo en resultado
function sortearAmigo() {
    // Revisar que haya al menos un amigo
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Indicar el largo de la lista de amigos y de esta sortear el nombre
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // se enseña el nombre
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
