// Array de objetos fornecido
const produtos = [
    { id: 1, nome: "Camiseta", preco: 50 },
    { id: 2, nome: "Calça", preco: 120 },
    { id: 3, nome: "Tênis", preco: 200 },
    { id: 4, nome: "Boné", preco: 30 }
];

// 1. Usando filter para produtos com preço > 100
const produtosCaros = produtos.filter(produto => produto.preco > 100);

// 2. Usando find para encontrar o produto com id === 3
const produtoID3 = produtos.find(produto => produto.id === 3);

// Exibindo os resultados no Console (F12 no navegador)
console.log("--- ARRAY ORIGINAL ---", produtos);
console.log("--- PRODUTOS > 100 (FILTER) ---", produtosCaros);
console.log("--- PRODUTO ID 3 (FIND) ---", produtoID3);

// Função utilitária para formatar objetos para o HTML de forma legível
const formatarParaHTML = (dados) => JSON.stringify(dados, null, 2);

// Exibindo os resultados no HTML
document.getElementById('arrayOriginal').textContent = formatarParaHTML(produtos);
document.getElementById('produtosCaros').textContent = formatarParaHTML(produtosCaros);
document.getElementById('produtoEncontrado').textContent = formatarParaHTML(produtoID3);