#Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. 
# Mostre o resultado das 7 operações básicas 
# (soma, subtração, multiplicação, divisão, divisão inteira, 
# potenciação e módulo) envolvendo essas variáveis.

a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)
print(a % b)

# Exercício 2: Declare e inicialize uma variável: hours = 6. 
# Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize 
# variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

hour = 6
minutes = 60 * hour
seconds = minutes * 6

print(hour)
print(minutes)
print(seconds)

# Exercício 3: Teste e verifique o que acontece se você colocar
#  um ponto e vírgula no final de uma instrução em Python.

print(seconds);

#Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. 
# O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. 
# Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

price = (24.2 * 40) / 100 
total = 60
transport = (total- 1) * 0.75 + 3
price_total = price * total + transport
print(price_total)

print(type(a))

# Exercício 5: Adicione o elemento “Ciência da Computação” à lista.
trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Data Science")
print(trybe_course)

# Exercício 6: Acesse e altere o primeiro elemento da lista para “Fundamentos”.

trybe_course[0] = "Fundamentos"
print(trybe_course)

#Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set().
#  Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto 
# utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {‘seu_nome’}.

nome = set()
nome.add("Jeferson")

print(nome)

#Exercício 8: Insira no objeto uma 
# nova propriedade com o nome de chave “recorrente” e o valor “Sim”. 
# Em seguida, imprima o objeto no console.

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "sim"
print(info)

# Exercício 9: Remova a propriedade cuja chave é “origem” e imprima o objeto no console.

del info["origem"]
print(info) 