jogador1 = prompt("Quem será o jogador 1?");
jogador2 = prompt("Quem será o jogador 2?");

var matriz = [["Pedra"], ["Papel"], ["Tesoura"]];

nro1 = Math.floor(Math.random() * (3 - 0) + 0);
nro2 = Math.floor(Math.random() * (3 - 0) + 0);

opc1 = matriz[nro1][0];
opc2 = matriz[nro2][0];

if (opc1 == "Pedra" && opc2 == "Tesoura") {
    alert("Jogador 1 ganhou!");
    document.write(`<p>O resultado foi ${jogador1} tirou: ${opc1}</p>`);
    document.write(`<p>E o ${jogador2} tirou: ${opc2}</p>`);
}
else if (opc1 == "Papel" && opc2 == "Pedra") {
    alert("Jogador 1 ganhou!");
    document.write(`<p>O resultado foi ${jogador1} tirou: ${opc1}</p>`);
    document.write(`<p>E o ${jogador2} tirou: ${opc2}</p>`);
}
else if (opc1 == "Tesoura" && opc2 == "Papel") {
    alert("Jogador 1 ganhou!");
    document.write(`<p>O resultado foi ${jogador1} tirou: ${opc1}</p>`);
    document.write(`<p>E o ${jogador2} tirou: ${opc2}</p>`);
}
else if (opc2 == "Pedra" && opc1 == "Tesoura") {
    alert("Jogador 2 ganhou!");
    document.write(`<p>O resultado foi ${jogador1} tirou: ${opc1}</p>`);
    document.write(`<p>E o ${jogador2} tirou: ${opc2}</p>`);
}
else if (opc2 == "Papel" && opc1 == "Pedra") {
    alert("Jogador 2 ganhou!");
    document.write(`<p>O resultado foi ${jogador1} tirou: ${opc1}</p>`);
    document.write(`<p>E o ${jogador2} tirou: ${opc2}</p>`);
}
else if (opc2 == "Tesoura" && opc1 == "Papel") {
    alert("Jogador 2 ganhou!");
    document.write(`<p>O resultado foi ${jogador1} tirou: ${opc1}</p>`);
    document.write(`<p>E o ${jogador2} tirou: ${opc2}</p>`);
}

