function tanjiroFaseIII() {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`Escolha qual caminho Tanjiro deve seguir:\n 1 - Esquerda\n 2- Direita`);

        if (opcao == 1) {
            window.location.href ="./../html/win.html";
            break;
        } else if (opcao == 2) {
            window.location.href ="./../html/game-over3.html";
            break;
        }else {
            alert (`Escolha a opção 1 ou 2`);
        }
    }
}
