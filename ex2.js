# exercicio2.py

# Variáveis pessoais
peso = 71  # em kg
altura = 1.63  # em metros

# Cálculo do IMC
imc = peso / (altura ** 2)

# Classificação do IMC
if imc < 18.5:
    classificacao = "Abaixo do peso"
elif imc < 25:
    classificacao = "Peso normal"
elif imc < 30:
    classificacao = "Sobrepeso"
else:
    classificacao = "Obesidade"

# Exibição do resultado
print(f"Peso: {peso} kg")
print(f"Altura: {altura} m")
print(f"IMC: {imc:.2f}")
print(f"Classificação: {classificacao}")
