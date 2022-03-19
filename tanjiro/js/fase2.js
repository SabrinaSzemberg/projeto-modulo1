function tanjiroFaseII () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`Faça a sua escolha:\n 1- Não aceitar a ajuda do homem\n 2- Aceitar a ajuda do homem`);

        if (opcao == 1) {
            window.location.href = "../html/game-over.html";
            break;
        } else if (opcao == 2) {
            window.location.href = "../html/fase3.html";
            break;
        }else {
            alert (`Escolha a opção 1 ou 2`);
        }
    }
}