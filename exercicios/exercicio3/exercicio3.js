// Array inicial vazio
const carrinho = [];

// 1. Usando .push() para adicionar 3 objetos (itens) de uma vez
carrinho.push(
    { nome: "Mouse Gamer", preco: 150 },
    { nome: "Teclado Mecânico", preco: 300 },
    { nome: "Monitor 24'", preco: 850 }
);

// 2. Exibindo o resultado no Console (F12 no navegador)
console.log("O array carrinho depois do .push():", carrinho);

// 3. Exibindo o resultado no HTML
// JSON.stringify(carrinho, null, 2) formata o array de objetos para ser legível no HTML
document.getElementById('carrinhoFinal').textContent = JSON.stringify(carrinho, null, 2);