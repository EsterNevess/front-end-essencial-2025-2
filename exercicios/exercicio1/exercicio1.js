// 1. Array de números inicial
const numeros = [2, 5, 8, 10, 15];

// 2. Uso do método .map()
// O .map() percorre o array 'numeros' e retorna um novo array.
// A função de callback (numero => numero * 3) é aplicada a cada elemento.
const numerosMultiplicados = numeros.map(numero => numero * 3);

// 3. Saída no console (Para desenvolvedores)
console.log("Array Original:", numeros);
console.log("Novo Array Multiplicado:", numerosMultiplicados);

// 4. Saída no HTML para visualização
// Usamos JSON.stringify para formatar o array de forma legível
document.getElementById('arrayOriginal').textContent = JSON.stringify(numeros);
document.getElementById('arrayNovo').textContent = JSON.stringify(numerosMultiplicados);