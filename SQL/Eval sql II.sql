1 - Contacts français :

SELECT CompanyName,ContactName,ContactTitle,Phone
FROM Customers
WHERE Country ='FRANCE'



2 - Produits vendus par « Exotic Liquids » :

SELECT productName as 'Produit' ,unitprice as 'Prix'
FROM Products
Join Suppliers on Suppliers.SupplierID = Products.SupplierID
WHERE CompanyName = 'exotic liquids'



3 - Produits vendus par fournisseurs Français ordre décroissant :

SELECT CompanyName, COUNT(UnitsOnOrder) as 'Nbr produits'
FROM suppliers
Join products on products.SupplierID = suppliers.SupplierID
WHERE Country ='France'
GROUP BY CompanyName
ORDER BY COUNT(UnitsOnOrder) DESC



4 - Clients Français, plus de 10 commandes :

SELECT CompanyName, COUNT(OrderID) as 'Nbrs de commandes'
FROM Customers
JOIN orders on orders.CustomerID = customers.CustomerID
WHERE Country = 'France'
GROUP BY CompanyName
HAVING COUNT(OrderID) > 10



5 - Clients ayant un chiffre d’affaires > 30.000 :

SELECT CompanyName AS Client, SUM(UnitPrice * Quantity) as CA, Country AS Pays
FROM customers
JOIN orders on orders.CustomerID = customers.CustomerID
JOIN orderdetails on orderdetails.OrderID = orders.OrderID
GROUP BY CompanyName,Country
HAVING SUM(UnitPrice * Quantity)> 30000
ORDER BY CA DESC


6 – Pays dont les clients ont passé commande de produits fournis par « Exotic
Liquids » :

SELECT ShipCountry AS Pays
FROM orders
JOIN orderdetails on orderdetails.OrderID = orders.OrderID 
JOIN products on products.ProductID = orderdetails.ProductID
JOIN suppliers on suppliers.SupplierID = products.SupplierID
WHERE suppliers.CompanyName = 'exotic liquids'
GROUP BY ShipCountry




7 – Montant des ventes de 1997 :

SELECT SUM(UnitPrice*Quantity) as 'Montant Ventes 97'
FROM orderdetails
JOIN Orders on orders.OrderID = orderdetails.OrderID
WHERE YEAR(OrderDate) = 1997



8 – Montant des ventes de 1997 mois/mois :

SELECT MONTH(OrderDate)AS 'Mois 97', SUM(UnitPrice*Quantity) as 'Montant Ventes'
FROM orderdetails
JOIN orders on orders.OrderID = orderdetails.OrderID
WHERE YEAR(OrderDate) = 1997
GROUP BY MONTH(OrderDate)
ORDER BY MONTH(OrderDate) ASC


9 – Depuis quelle date le client « Du monde entier » n’a plus commandé ?

SELECT MAX(OrderDate)
FROM orders
Join customers on customers.CustomerID = orders.CustomerID
WHERE CompanyName = 'Du monde entier'



10 – Délai moyen de livraison en jours :

SELECT ROUND(AVG(DATEDIFF(ShippedDate,OrderDate))) AS 'Délai moyen  de livraison en jours'
FROM Orders
