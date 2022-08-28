cartas = [];
for (i = 0; i < 27; i++) {
    cartas[i] = i + 1;
}
sort = parseInt(Math.random() * cartas.length);
cartaout = cartas.splice(sort, 1);
document.write(`<img src="../img/cartas/carta${cartaout[0]}.png">`);