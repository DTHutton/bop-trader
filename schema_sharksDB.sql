-- only for developing, cannot use this DB schema when using locally - (?)
-- must connect through SQL Workbench custom conneciton to JawsDB  

USE sjro560knhmtbjsf;

CREATE TABLE BOP_TABLE
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);