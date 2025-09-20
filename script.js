// =============================================
// ÁREA DE CÓDIGO COMUM - NÃO ALTERAR
// =============================================

function getValues() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === '' || num2 === '') {
        alert('ERRO: Por favor, preencha os dois valores.');
        return [null, null];
    }
    return [parseFloat(num1), parseFloat(num2)];
}

function displayResult(value) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `C:> Resultado: ${value}`;
}


// =============================================
// ÁREA DE CÓDIGO DOS ALUNOS
// =============================================

// ---------- CÓDIGO DO BOTÃO 1 (JOHN DOE) ----------
document.getElementById('btn-aluno1').addEventListener('click', () => {
    const [val1, val2] = getValues();
    if (val1 === null) return; // Interrompe se os valores forem inválidos
    const resultado = val1 + val2;
    displayResult(resultado);
});

// ---------- COLE AQUI O CÓDIGO DO BOTÃO 30 ----------
document.getElementById('btn-aluno1').addEventListener('click', () => {
    // Defina os pesos para cada valor.
    // Eles podem ser fixos no código ou obtidos de outros campos de input.
    const peso1 = 2; // Exemplo: Peso para a primeira nota
    const peso2 = 3; // Exemplo: Peso para a segunda nota

    const [val1, val2] = getValues();
    if (val1 === null) return; // Interrompe se os valores forem inválidos

    // Cálculo da média ponderada: (valor1 * peso1 + valor2 * peso2) / (soma dos pesos)
    const resultado = (val1 * peso1 + val2 * peso2) / (peso1 + peso2);

    displayResult(resultado);
});

// ---------- COLE AQUI O CÓDIGO DO BOTÃO 15 ----------

document.getElementById('btn-aluno1').addEventListener('click', () => {
    // 1. Obter o conjunto de valores.
    // Assumimos que getValues() retorna um array de números, ex: [10, 5, 8, 9]
    const valores = getValues();
    
    // Interrompe se os valores forem inválidos ou o array estiver vazio
    if (!valores || valores.length === 0) return;

    // 2. Ordenar os valores em ordem crescente. Essencial para a mediana.
    valores.sort((a, b) => a - b);

    const tamanho = valores.length;
    const meio = Math.floor(tamanho / 2);
    let mediana;

    // 3. Checar se a quantidade de elementos é ímpar ou par
    if (tamanho % 2 !== 0) {
        // Se for ÍMPAR, a mediana é exatamente o valor do meio
        mediana = valores[meio];
    } else {
        // Se for PAR, a mediana é a média dos dois valores centrais
        mediana = (valores[meio - 1] + valores[meio]) / 2;
    }

    const resultado = mediana;
    displayResult(resultado);
});

// etc...
