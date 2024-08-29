const tabella = document.getElementById("tabella");
const Bottone = document.getElementById("Bottone");

const funzTabbel = () => {
  for (let i = 0; i < 76; i++) {
    const cella = document.createElement("div");
    const numero = document.createElement("h3");
    cella.appendChild(numero);
    tabella.appendChild(cella);
    numero.innerText = i;
  }
};

Bottone.addEventListener("click", () => {
  const numeroRandom = Math.floor(Math.random() * 77);
  console.log(numeroRandom);
  const cellaEvidenziata = array.forEach((nuemric) => {
    tabella[i];
  });
});

window.onload = () => {
  funzTabbel();
};
