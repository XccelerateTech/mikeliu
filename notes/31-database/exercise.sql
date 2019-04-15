--create table in terminal

--exercise a
CREATE TABLE stock(                                                     
    id SERIAL primary key,                                                       fruit VARCHAR(255) not null,
    description TEXT,
    qty INTEGER,
    price INTEGER
);


--exercise c
CREATE TABLE c(
    employee_id SERIAL primary key,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    salary INTEGER,
    contract_length INTEGER
);

INSERT INTO c (first_name, last_name, salary, contract_length) VALUES ('Steven','King',10000,3); 
INSERT INTO c (first_name, last_name, salary, contract_length) VALUES ('Neena','Kochha',8000,2); 
INSERT INTO c (first_name, last_name, salary, contract_length) VALUES ('David','Austin',12000,2); 
INSERT INTO c (first_name, last_name, salary, contract_length) VALUES ('Nancy','Greenberg',3000,1); 

--1
SELECT first_name, last_name, salary FROM c  WHERE first_name AND last_name AND salary BETWEEN 5000 AND 11000;

--2
SELECT first_name, last_name, contract_length FROM c WHERE contract_length < 2;

--3
INSERT INTO c (first_name, last_name, salary, contract_length) VALUES ('Tom', 'White', 9000, 1);
INSERT INTO c (first_name, last_name, salary, contract_length) VALUES ('Peter', 'Doe', 14000, 2);

--4
--set new vlaue then where old value
UPDATE c SET contract_length = 2 WHERE contract_length = 1;
UPDATE c SET salary = 8000 WHERE salary = 3000;

--5
SELECT * FROM c ORDER BY salary DESC;


