function contar() {
    var inicio = document.getElementById('Inicio').value;
    var fim = document.getElementById('Fim').value;
    var passo = document.getElementById('Passo').value;

    if (inicio === "" || fim === "" || passo === "") {
        alert('Preencha todos os campos');
        return;
    }

    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    }

    var res = document.getElementById('res');
    res.innerHTML = "<p>Contando:</p>"; // Limpa o conteúdo anterior

    if (inicio < fim) {
        // Contagem crescente
        for (var i = inicio; i <= fim; i += passo) {
            res.innerHTML += ` ${i} \u{1F449}`; // Emoji de dedo apontando para a direita
        }
    } else {
        // Contagem decrescente
        for (var i = inicio; i >= fim; i -= passo) {
            res.innerHTML += ` ${i} \u{1F449}`; // Emoji de dedo apontando para a direita
        }
    }
    res.innerHTML += `\u{1F3C1}`; // Emoji de bandeira de chegada
}