DROP DATABASE IF EXISTS bop_db;
CREATE DATABASE bop_db;

USE bop_db;

-- CREATE TABLE User 
-- (
-- 	userId int AUTO_INCREMENT NOT NULL,
--     email varchar(255),
--     password varchar(255),
--     cash int,
--     bitcoin int,
--     ethereum int,
--     litecoin int,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     PRIMARY KEY (userId)
-- );

-- CREATE TABLE Transactions
-- (
-- 	id int AUTO_INCREMENT PRIMARY KEY,
--     amount INT,
--     cryptoType VARCHAR(255),
--     transactionType VARCHAR(255),
--     priceAtSale INT,
--     totalPrice INT,
--     saleAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     createdAt DATETIME,
--     updatedAt DATETIME
-- );

-- INSERT INTO User (email, password, cash, bitcoin, ethereum, litecoin)
-- VALUES ("aa@gmail.com", "gg", 10000, 5, 5, 5);

-- INSERT INTO Transactions (amount, cryptoType, transactionType, priceAtSale, totalPrice, idKey)
-- VALUES (5, "BTC", "buy", 8074.49817746, 40372.4908, 1);
-- INSERT INTO Transactions (amount, cryptoType, transactionType, priceAtSale, totalPrice, idKey)
-- VALUES (5, "BTC", "sell", 8075.49817746, 40377.4908, 1);

-- SELECT * FROM `bop_db`.`User` LIMIT 1000;
-- SELECT * FROM `bop_db`.`Transactions` LIMIT 1000;