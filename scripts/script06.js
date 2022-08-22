var sorteio = [];
var nro = Math.ceil(Math.random() * 61);
for (i = 0; i < 6; i++) {
    while (sorteio.indexOf(nro) >= 0) {
        nro = Math.ceil(Math.random() * 61);
    }
    sorteio.push(nro);
}
document.write(`<p>Sugestão para garantir sua grana na mega sena: ${sorteio}.</p>`);