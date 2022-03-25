function inosukeFaseII() {
    while (opcao != 1 || opcao !=2) {
        var opcao = prompt (`Faça a sua escolha:\n 1- Continuar lutando sozinho\n 2- Pedir ajuda para Tanjiro e Zenitsu`)

        if (opcao == 1) {
            window.location.href = "../html/game-over2.html";
            break;
        }else if (opcao == 2) {
            window.location.href = "../html/fase3.html";
            break;
        }else {
            alert ("Escolha a opção 1 ou 2")
        }
    }
}