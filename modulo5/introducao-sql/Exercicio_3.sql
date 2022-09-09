select * from Funcionarios_Olar; -- Letra A

select id as identifier, name from Funcionarios_Olar; -- Letra B 

select * from Funcionarios_Olar
where name = "Laura"; -- Letra C

select * from Funcionarios_Olar
where name like "%a%"; -- Letra D

select * from Funcionarios_Olar
where email like "%u%" and name not like "%r%"; -- Letra E