qtdPess = parseInt(prompt("Informe a quantidade de pessoas: "));
nomes = [];
for (i = 0; i < qtdPess; i++) {
    nomes[i] = prompt(`Informe o nome ${i + 1}:`);
}
document.write(`<h1 style='text-align:center'>Ordem de apresentação dos grupos</h2>`)
for (i = 0; i < qtdPess; i++) {
    sort = parseInt(Math.random() * nomes.length);
    nomeout = nomes.splice(sort, 1);
    document.write(`${i+1}° - ${nomeout[0]}`);
    document.write(`<hr></hr>`);
}

