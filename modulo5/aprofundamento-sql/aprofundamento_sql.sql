USE `Hopper-4313855-diego-motta`;
SET SQL_SAFE_UPDATES = 0;


-- Exercicio 1
CREATE TABLE Empresa(
	id VARCHAR(3) PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
    title VARCHAR(40) NOT NULL,
    date date NOT NULL
); 

-- Exercicio 2
INSERT INTO Empresa(id, name, title, date)
values(
	"001",
    "LabeSky",
    "LSy",
    "2023/10/05"
);

INSERT INTO Empresa(id, name, title, date)
values(
	"002",
    "Labefy",
    "LFy",
    "2024/01/06"
);

INSERT INTO Empresa(id, name, title, date)
values(
	"003",
    "AstroZoom",
    "AZm",
    "2022/12/20"
);

-- Exercicio 3
-- Letra A
ALTER TABLE Empresa DROP COLUMN title;
DESCRIBE Empresa;

-- Letra B
ALTER TABLE Empresa CHANGE date dueDate date NOT NULL;
DESCRIBE Empresa;

-- Letra C
ALTER TABLE Empresa ADD	email VARCHAR(40) UNIQUE;
DESCRIBE Empresa;


-- Exercicio 4
-- Letra A
ALTER TABLE Empresa ADD description VARCHAR(400) NOT NULL;
DESCRIBE Empresa;

-- Letra B
UPDATE Empresa SET description = "Projeto de sistema em nuvem da Labenu." WHERE id = "001";
UPDATE Empresa SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = "002";
UPDATE Empresa SET description = "Projeto de rede de comunicação da Labenu." WHERE id = "003";
DESCRIBE Empresa;


-- Exercicio 5
-- Letra A
SELECT * FROM Empresa ORDER BY dueDate DESC;

-- Letra B
SELECT name, dueDate FROM Empresa ORDER BY dueDate ASC LIMIT 2;