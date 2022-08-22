n = parseInt(prompt("Informe o primeiro número: "));
m = parseInt(prompt("Informe o segundo número: "));
n += 1;
document.write(`<p>${Math.floor(Math.random() * (n - m) + m)}</p>`);
