function tanjiroFaseI () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`Faça a sua escolha:\n 1- buscar ajuda para que Nezuko possa voltar a ser uma humana\n 2-deixa-la na casa até que um matador de demônios a encontre`);

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
