function zenitsuFaseIII() {
    while (opcao != 1 || opcao != 2 || opcao != 3) {
        var opcao = prompt (`1 - Respiração das chamas\n 2 - Respiração da água\n 3- Respiração da Lua`);

        if (opcao == 1 ) {
            window.location.href = "./../html/win.html";
            break;
        }else if (opcao == 2) {
            window.location.href = "./../html/game-over3.html";
            break;
        }else if (opcao == 3) {
            window.location.href = "./../html/game-over3.html";
            break;
        }else {
            alert ('Escolha uma das opções disponíveis')
        }
        
    }
}