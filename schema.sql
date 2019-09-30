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

SELECT * FROM `bop_db`.`Users` LIMIT 1000;