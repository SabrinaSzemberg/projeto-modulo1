function inosukeFaseIII() {
    while (opcao != 1 || opcao !=2) {
        var opcao = prompt (`Faça a sua escolha:\n 1- agradecer seus amigos, pois sem eles Enmu teria o derrotado e matado os passageiros.\n 2- Não agradecer seus amigos pois isso deixaria claro que Inosuke não é capaz de vencer uma batalha sozinho.`)

        if (opcao == 1) {
            window.location.href = "../html/win.html";
            break;
        }else if (opcao == 2) {
            window.location.href = "../html/game-over3.html";
            break;
        }else {
            alert ("Escolha a opção 1 ou 2")
        }
    }
}