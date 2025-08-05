let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 

  if (amigos.length === 0) {
    alert("No existen amigos en la lista para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];

  const li = document.createElement("li");
  li.innerHTML = `El amigo secreto es: <strong>${nombreSorteado}</strong>`;
  resultado.appendChild(li);
}
