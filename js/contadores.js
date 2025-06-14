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
    return parseFloat(localStorage.getItem('dinheiro')) || 1000;
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
        dinheiroHtml.innerHTML = 'Dinheiro: R$ ' + getDinheiro().toFixed(2);
    }
}

// ----- CONTADOR DE SALÁRIO -----
let contador = 60;
let intervaloContador = null;

function atualizarVisualContador() {
    const contadorHtml = document.getElementById('contador-bonus');
    if (contadorHtml) {
        contadorHtml.innerHTML = `Salário em: ${contador}s`;
    }
}

function iniciarBonusComContador() {
    const escolhaFinal1 = localStorage.getItem('escolhaFinal1');
    const escolhaMoradia = localStorage.getItem('escolhaMoradia'); // nova variável para moradia
    let salarioBonus = 600;

    if (escolhaMoradia === "alugar_casa") {
        salarioBonus = 300;
    }

    if (escolhaFinal1 === "samuel_emprego" || escolhaFinal1 === "samara_emprego") {
        contador = 60;
        atualizarVisualContador();

        if (intervaloContador) clearInterval(intervaloContador);

        intervaloContador = setInterval(() => {
            contador--;
            if (contador <= 0) {
                adicionarDinheiro(salarioBonus);
                contador = 60;
            }
            atualizarVisualContador();
        }, 1000);
    }
}


// ----- DOM -----
document.addEventListener("DOMContentLoaded", () => {
    atualizarVisualFilhos();
    atualizarVisualDinheiro();

    // Cria o elemento do contador no nav se não existir
    if (!document.getElementById('contador-bonus')) {
        const nav = document.querySelector('nav') || document.body; // ou outro container que desejar
        const contadorEl = document.createElement('div');
        contadorEl.id = 'contador-bonus';
        contadorEl.style.cssText = 'color:#fff; font-weight:bold; margin-left:15px;';
        nav.appendChild(contadorEl);
    }

    iniciarBonusComContador();
});
