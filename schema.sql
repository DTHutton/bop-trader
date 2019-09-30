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

CREATE TABLE buyTransactions
(
	id int AUTO_INCREMENT NOT NULL,
    amount INT,
    cryptoType VARCHAR(255),
    priceAtBuy INT,
    boughtAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	createdAt DATETIME,
    updatedAt DATETIME,
	PRIMARY KEY (id)
);

CREATE TABLE sellTransactions
(
	id int AUTO_INCREMENT NOT NULL,
    amount INT,
    cryptoType VARCHAR(255),
    priceAtSell INT,
    soldAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	createdAt DATETIME,
    updatedAt DATETIME,
	PRIMARY KEY (id)
);

SELECT * FROM `bop_db`.`Users` LIMIT 1000;