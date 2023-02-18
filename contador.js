// Verifica se o contador já foi salvo em localStorage
if (localStorage.getItem("contador") === null) {
  // Se não, cria um novo contador
  localStorage.setItem("contador", 1);
} else {
  // Se sim, incrementa o valor atual
  let contadorAtual = parseInt(localStorage.getItem("contador"));
  localStorage.setItem("contador", contadorAtual + 1);
}

// Atualiza o valor do contador na página
document.getElementById("contador").innerText = localStorage.getItem("contador");

