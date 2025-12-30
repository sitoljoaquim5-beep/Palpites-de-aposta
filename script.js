let palpites = JSON.parse(localStorage.getItem("palpites")) || [];

function mostrarPalpites() {
  let div = document.getElementById("palpites");
  if (!div) return;

  div.innerHTML = "";
  palpites.forEach(p => {
    div.innerHTML += `<div class="palpite">${p}</div>`;
  });
}

function publicar() {
  let texto = document.getElementById("texto").value;
  if (texto === "") return alert("Escreva um palpite");

  palpites.push(texto);
  localStorage.setItem("palpites", JSON.stringify(palpites));
  alert("Palpite publicado!");
  document.getElementById("texto").value = "";
}

mostrarPalpites();
