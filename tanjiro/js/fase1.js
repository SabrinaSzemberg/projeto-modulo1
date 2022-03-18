function tanjiroFaseI () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`Se, durante uma corrida de carros, você deixa o segundo colocado pra trás, qual é a sua colocação após a ultrapassagem?\n 1- Segundo colocado\n 2- Último colocado`);

        if (opcao == 1) {
            window.location.href = "../html/fase2.html";
            break;
        } else if (opcao == 2) {
            window.location.href = "../html/game-over.html";
            break;
        }else {
            alert (`Escolha a opção 1 ou 2`);
        }
    }
}
