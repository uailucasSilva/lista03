qtdPass = parseInt(prompt("Informe a quantidade de passageiros: "));
var matriz = [["Nome", "Nro"]];
idade = 0;
count = 0;
for (i = 1; i <= qtdPass; i++) {
    for (j = 0; j < 2; j++) {
        if (j == 0) {
            matriz.splice(i, j, [prompt("Informe o nome do passageiro:")]);
            idade += parseInt(prompt("Informe a idade do passageiro:"));
            count++;
        }
        else {
            matriz[i][j] = i;
        }
    }

}
qtdPass = qtdPass + 1;
sorteado = Math.floor(Math.random() * (qtdPass - 1) + 1);
document.write(`<p>O passageiro ${matriz[sorteado][0]} ganhou um almoço grátis na primeira parada!</p>`)
document.write(`<p>A média da idade dos passageiros é de ${Math.floor(idade / count)} anos.</p>`);