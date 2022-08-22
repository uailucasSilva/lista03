qtdPess = parseInt(prompt("Informe a quantidade de pessoas: "));
var matriz = [["Nome"]];
for (i = 1; i <= qtdPess; i++) {
    matriz.splice(i, 0, [prompt("Informe o nome um nome:")]);
}
console.log(matriz);
var sorteio = [0];
var nro = Math.ceil(Math.random() * (qtdPess - 1) + 1);
for (i = 1; i <= qtdPess; i++) {
    while (sorteio.indexOf(nro) >= 0) {
         nro = Math.ceil(Math.random() * (qtdPess - 1) + 1);
    }
    sorteio.push(nro);
}
for (i = 1; i <= qtdPess; i++) {
    document.write(`<p>${i}° ${matriz[sorteio[i]]}</p>`);
}
console.log(sorteio);
