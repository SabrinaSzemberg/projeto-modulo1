function inosukeFaseI(){
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (`Faça a sua escolha:\n 1- Enfrentar o demônio\n 2-Tirar as pessoas do trem`);

        if (opcao == 1) {
            window.location.href = "../html/fase2.html";
            break;
        }else if(opcao == 2) {
            window.location.href = "../html/game-over1.html";
            break;
        }else {
            alert ("Escolha a opção 1 ou 2");
        }
    }
}