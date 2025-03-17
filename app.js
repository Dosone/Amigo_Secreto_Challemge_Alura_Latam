let amigos = [];

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value.trim();

  // Validaciones
  if (amigo === "") {
    alert("¡Por favor, ingresa un nombre para tu amigo secreto!");
  } else if (!/^[a-zA-Z\s]+$/.test(amigo)) {
    alert("¡Por favor, ingresa un nombre válido (solo letras!)");
  } else {
    amigos.push(amigo);
    document.getElementById("amigo").value = ""; // Limpiar campo de entrada
    mostrarAmigos(); // Actualizar lista de amigos
  }
}
function mostrarAmigos() {
  const contenedorAmigos = document.getElementById("listaAmigos");
  contenedorAmigos.innerHTML = ""; // Limpiar lista antes de agregar

  // Mostrar la lista de amigos
  amigos.forEach(amigo => {
    const item = document.createElement("li");
    item.textContent = amigo;
    contenedorAmigos.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡Aún no has agregado a ningún amigo! Por favor, agrega uno antes de hacer el sorteo.");
  } else {
    const amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = amigoElegido;
  }
}
