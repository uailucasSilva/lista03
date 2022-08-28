cartas = [];
for (i = 0; i < 27; i++) {
    cartas[i] = i + 1;
}
document.write(`<div class="container">`);
document.write(`<h1>JOGUE TRUCO</h1>`);
document.write(`<h3>Cartas sorteadas</h3>`);

document.write(`<div>`);
for (j = 0; j < 4; j++) {
    document.write(`<div class="breakLine">`)
    document.write(`<p><b>Cartas do Jogador ${j + 1}:</b></p>`);
    for (k = 0; k < 3; k++) {
        sort = parseInt(Math.random() * cartas.length);
        cartaout = cartas.splice(sort, 1);
        document.write(`<img src="../img/cartas/carta${cartaout[0]}.png">`);
    }
    document.write(`</div>`)
}
document.write(`</div>`);
document.write(`</div>`);