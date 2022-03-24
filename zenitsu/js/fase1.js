function zenitsuFaseI() {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt ("1 - Shinosoku\n 2 - Rokuren");

        if (opcao == 1 ) {
            window.location.href = "./../html/game-over1.html";
            break;
        }else if (opcao == 2) {
            window.location.href = "./../html/fase2.html";
            break;
        }else {
            alert ("Escolha uma das opções acima");
        }
    }
}