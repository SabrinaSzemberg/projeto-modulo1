function zenitsuFaseIII() {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`1 - Flor de Glicínia\n 2 - Flor de cerejeira`);

        if (opcao == 1 ) {
            window.location.href = "./../html/win.html";
            break;
        }else if (opcao == 2) {
            window.location.href = "./../html/game-over3.html";
            break;
        }else {
            alert (`Escolha uma das opções acima`);
        }
    }
}