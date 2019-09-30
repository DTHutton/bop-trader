DROP DATABASE IF EXISTS bop_db;
CREATE DATABASE bop_db;

USE bop_db;

CREATE TABLE Users 
(
	   userId int AUTO_INCREMENT NOT NULL,
    email varchar(255),
    password varchar(255),
    cash int,
    bitcoin int,
    ethereum int,
    litecoin int,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (userId)
);

CREATE TABLE Transactions
(
	id int AUTO_INCREMENT NOT NULL,
    amount INT,
    cryptoType VARCHAR(255),
    transactionType VARCHAR(255),
    priceAtSale INT,
    saleAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO Transactions (amount, cryptoType, transactionType, priceAtSale)
VALUES (5, "BTC", "buy", 8075.49817746);
INSERT INTO Transactions (amount, cryptoType, transactionType, priceAtSale)
VALUES (5, "BTC", "sell", 8075.49817746);

SELECT * FROM `bop_db`.`Users` LIMIT 1000;