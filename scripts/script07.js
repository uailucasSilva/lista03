function image() {
    dadoNro = Math.floor(Math.random() * (7 - 1) + 1);

    switch (dadoNro) {
        case 1:
            var a = document.createElement("img");
            a.src = "../img/dado1.png";
            a.width = 200;
            a.height = 150;
            a.alt = "dado 1";
            document.body.appendChild(a);
            break;
        case 2:
            var a = document.createElement("img");
            a.src = "../img/dado2.png";
            a.width = 200;
            a.height = 150;
            a.alt = "dado 1";
            document.body.appendChild(a);
            break;
        case 3:
            var a = document.createElement("img");
            a.src = '../img/dado3.png';
            a.width = 200;
            a.height = 150;
            a.alt = "dado 1";
            document.body.appendChild(a);
            break;
        case 4:
            var a = document.createElement("img");
            a.src = "../img/dado4.png";
            a.width = 200;
            a.height = 150;
            a.alt = "dado 1";
            document.body.appendChild(a);
            break;
        case 5:
            var a = document.createElement("img");
            a.src = "../img/dado5.png";
            a.width = 200;
            a.height = 150;
            a.alt = "dado 1";
            document.body.appendChild(a);
            break;
        case 6:
            var a = document.createElement("img");
            a.src = "../img/dado6.png";
            a.width = 200;
            a.height = 150;
            a.alt = "dado 1";
            document.body.appendChild(a);
            break;
    }
}
function reset(){
    location.reload();
}