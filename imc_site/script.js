document.getElementById('calcular-btn').addEventListener('click', function() {
    // 1. Obter os valores dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const resultDiv = document.getElementById('result');

    // 2. Validação básica
    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        resultDiv.innerHTML = "<p style='color: red;'>Por favor, insira valores válidos para peso e altura.</p>";
        return;
    }

    // 3. Calcular IMC (fórmula: peso / (altura_em_metros^2))
    const alturaMetros = alturaCm / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    const imcFormatado = imc.toFixed(2);

    // 4. Classificação do IMC
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    // 5. Exibir o resultado
    resultDiv.innerHTML = `<h3>Seu IMC é: <strong>${imcFormatado}</strong></h3>
        <p>Classificação: <strong>${classificacao}</strong></p>`;
        resultDiv.className = imc >= 35 ? 'result-danger' : 'result-info'; 
        resultDiv.style.color = imc >= 25 ? 'red' : 'green';
});