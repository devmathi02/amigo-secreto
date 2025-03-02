//variables
let amigos = [];


//funciones
function agregarAmigo() {
    let nombre = document.getElementById('amigo');
    let entrada = nombre.value.trim();

    //valida si se ingresa espacios en blanco o algún caracter númerico.
    if (entrada === "" || !/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(entrada)) {
        alert('Por favor, inserte un nombre.');
        return
    }

    if (amigos.includes(entrada)) {
        alert('Este nombre ya ha sido agregado');
        return;
    }

    amigos.push(entrada);
    console.log("Lista actualizada:", amigos);

    limpiarCaja(nombre);
    nombre.focus();

    actualizarAmigo();
}


function limpiarCaja(input) {
    input.value = '';
}


function actualizarAmigo() {
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigo.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = 'Todos los amigos fueron sorteados🎉, recargue la pagina';
        return;
    }

    let sortearAmigos = Math.floor(Math.random()* amigos.length);
    let amigoSorteado = amigos[sortearAmigos];
    document.getElementById("resultado").innerHTML = `🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;

    amigos.splice(sortearAmigos,1);
    actualizarAmigo();
}