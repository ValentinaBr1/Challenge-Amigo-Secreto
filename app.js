
let nombresDeAmigos = [];

function agregarAmigo() {
    let usuarioAmigo = document.getElementById("amigo").value; 

    if (usuarioAmigo === "") {
// Si el usuario no ingresa ninugn valor, se mostrara una alerta que le solicite un nombre
        alert ("Por favor, inserte un nombre.")
    }
    else {
        nombresDeAmigos.push (usuarioAmigo);
        limpiarCaja();
        actualizarListaDeAmigos();
    } 
    return;
}

function limpiarCaja() {
    let contenidoCaja = document.getElementById ("amigo").value = ""; 
}
            
function actualizarListaDeAmigos () {
    let Amigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
        
    for (let i = 0; i < nombresDeAmigos.length; i++) {
        let elemento = document.createElement ("li");
        elemento.textContent = (nombresDeAmigos[i]);
        Amigos.appendChild(elemento);
    }
}
        
function sortearAmigo() {
    listaAmigos.innerHTML = "";
    if (nombresDeAmigos.length > 0) {
        const randomAmigoSecreto = Math.floor(Math.random() * nombresDeAmigos.length);
        const amigoSecreto = nombresDeAmigos[randomAmigoSecreto];
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
        nombresDeAmigos.length = 0;
        } else {
            alert ("Para poder jugar, por favor ingrese dos nombres o más.");
        }
}
        
        
        