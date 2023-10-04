function inicio() {
    let nome = prompt('Qual é o nome do herói?');
    let nivel = parseInt(prompt('Qual é a quantidade de experiência (XP) do herói?'));

    let mensagem;

    if (nivel < 1000) {
        mensagem = "Ferro";
    } else if (nivel >= 1001 && nivel <= 2000) {
        mensagem = "Bronze";
    } else if (nivel >= 2001 && nivel <= 5000) {
        mensagem = "Prata";
    } else if (nivel >= 6001 && nivel <= 7000) {
        mensagem = "Ouro";
    } else if (nivel >= 7001 && nivel <= 8000) {
        mensagem = "Platina";
    } else if (nivel >= 8001 && nivel <= 9000) {
        mensagem = "Ascendente";
    } else if (nivel >= 9001 && nivel <= 10000) {
        mensagem = "Imortal";
    } else {
        mensagem = "Radiante";
    }

    window.alert(`O Herói de nome ${nome} está no nível de ${mensagem}`);
}