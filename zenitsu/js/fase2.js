function zenitsuFaseII() {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`1 - Nichirintou\n 2 - Ichibantou`);

        if (opcao == 1 ) {
            window.location.href = "./../html/game-over2.html";
            break;
        }else if (opcao == 2) {
            window.location.href = "./../html/fase3.html";
            break;
        }else {
            alert (`Escolha uma das opções acima`);
        }
    }
}