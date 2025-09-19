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

// ---------- COLE AQUI O CÓDIGO DO BOTÃO 2 ----------


// ---------- COLE AQUI O CÓDIGO DO BOTÃO 3 ----------


// etc...
