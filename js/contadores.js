// ----- FILHOS -----
function getFilhos() {
    return parseInt(localStorage.getItem('filhos')) || 0;
}

function setFilhos(valor) {
    localStorage.setItem('filhos', valor);
}

function adicionarFilho() {
    const filhosAtual = getFilhos() + 1;
    setFilhos(filhosAtual);
    atualizarVisualFilhos();
}

function atualizarVisualFilhos() {
    const filhosHtml = document.getElementById('filhos-contador');
    if (filhosHtml) {
        filhosHtml.innerHTML = 'Filhos: ' + getFilhos();
    }
}

// ----- DINHEIRO -----
function getDinheiro() {
    return parseInt(localStorage.getItem('dinheiro')) || 0;
}

function setDinheiro(valor) {
    localStorage.setItem('dinheiro', valor);
}

function adicionarDinheiro(valor) {
    const total = getDinheiro() + valor;
    setDinheiro(total);
    atualizarVisualDinheiro();
}

function gastarDinheiro(valor) {
    const total = getDinheiro() - valor;
    setDinheiro(total >= 0 ? total : 0);
    atualizarVisualDinheiro();
}

function atualizarVisualDinheiro() {
    const dinheiroHtml = document.getElementById('dinheiro-contador');
    if (dinheiroHtml) {
        dinheiroHtml.innerHTML = 'Dinheiro: R$ ' + getDinheiro();
    }
}

// ----- DOM -----
document.addEventListener("DOMContentLoaded", () => {
    atualizarVisualFilhos();
    atualizarVisualDinheiro();
});
