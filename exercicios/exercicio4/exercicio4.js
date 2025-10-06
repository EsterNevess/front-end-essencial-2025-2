// 1. Array de cores que serão usadas na rotação
const cores = [
    '#e74c3c', // Vermelho
    '#f1c40f', // Amarelo
    '#9b59b6', // Roxo
    '#1abc9c', // Turquesa
    '#e67e22'  // Laranja
];

// 2. Variável para rastrear a cor atual no array (começa no índice 0)
let indiceCorAtual = 0;

// 3. Pegar os elementos do HTML pelo ID
const quadrado = document.getElementById('quadrado');
const botao = document.getElementById('botaoMudarCor');

// 4. Função que muda a cor
function mudarCor() {
    // Aplica a cor atual ao estilo de fundo do quadrado
    quadrado.style.backgroundColor = cores[indiceCorAtual];
    
    // Incrementa o índice. O operador módulo (%) garante que o índice volte a zero
    // (cores.length = 5) após o último elemento, criando um ciclo.
    indiceCorAtual = (indiceCorAtual + 1) % cores.length;
}

// 5. Adiciona o evento de clique ao botão, chamando a função 'mudarCor'
botao.addEventListener('click', mudarCor);