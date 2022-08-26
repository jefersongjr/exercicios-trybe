#Média de dias que uma pessoa usuária permanece com o produto alugado
SELECT AVG(DATEDIFF(date(return_date), date(rental_date))) 
AS 'Média de Dias' 
FROM sakila.rental;

# Tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating
SELECT 
MAX(length) AS 'Maior filme', 
MIN(length) AS 'Menor filme', 
AVG(length) AS 'Média de tempo' 
FROM sakila.film
WHERE release_year = 2006;

#Quantas pessoas usuárias temos por cidade? 
SELECT district , count(*) FROM sakila.address group by district;

#Qual o valor total recebido dentro de cada mês? 
SELECT SUM(amount), 
	MONTH(payment_date) 
		FROM sakila.payment 
		GROUP BY MONTH(payment_date);
        
#Quantidade de itens alugados pelo preço
SELECT 
    amount as `preço`, 
    COUNT(amount) as `qtd`
FROM sakila.payment
GROUP BY amount
HAVING amount <= 1.99
ORDER BY `qtd` DESC;

#Qual valor total arrecadado agrupado por mês, ano e `amount`?
SELECT 
    amount, 
    SUM(amount) as `soma`, 
    year(payment_date), 
    month(payment_date) 
FROM sakila.payment
GROUP BY 
    amount, year(payment_date), month(payment_date)
-- HAVING `soma` >= 1000
ORDER BY year(payment_date), month(payment_date), amount;