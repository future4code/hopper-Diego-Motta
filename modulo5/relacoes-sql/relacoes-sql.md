#### Exercício 1

a) Explique o que é uma chave estrangeira
- A chave estrangeira, ou foreign key, é um campo, ou coleção de campos, que refere-se à chave primária de outra tabela.
- A tabela com a foreign key é chamada de child table, enquanto que a tabela com a chave primária é a parent table.  

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

- CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    );

- INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES(
        "001",
        "Nunca vi esse, mas parece ser estilo zorra total",
        "4",
        "001"
    );

- INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES(
        "002",
        "Um clássico moderno do cinema brasileiro",
        "8",
        "004"
    );

- INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES(
        "003",
        "Bom elenco, mas parece mais uma novela.",
        "7",
        "002"
    );

- INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES(
        "004",
        "O original é melhor",
        "5",
        "003"
    );

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
- INSERT INTO Rating (id, comment, rate, movie_id)
    VALUES(
        "005",
        "O original é melhor",
        "5",
        "005"
    );
- Não é possível adicionar o item dessa forma, aparece o erro 1452, deve existir um id válido na parent table.

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
- ALTER TABLE Movie
- DROP COLUMN Rating;

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
- DELETE FROM Movie
- WHERE id = 001;
- Não é possível fazer essa exclusão enquanto houver o valor atribuido.


#### Exercício 2

a) Explique, com as suas palavras, essa tabela
- Essa tabela mostra a relação entre duas ou mais variáveis que se relacionam repetidas vezes.

b) Crie, ao menos, 6 relações nessa tabela
-   INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"003",
    "002"
    );
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"003",
    "001"
    );
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"004",
    "004"
    );
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"004",
    "003"
    );
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"001",
    "002"
    );
    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"001",
    "004"
    );

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
- INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
	"001",
    "005"
    );
- Não é possível adicionar um item com uma foreign key inválida.

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
- DELETE FROM Actor
- WHERE id = 003;
- Não é possível fazer essa exclusão enquanto houver o valor atribuido.


#### Exercício 3

a) Explique, com suas palavras, a query acima. O que é o operador ON?
- É o operador que define a relação entre as duas tabelas que serão retornadas juntas.

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

- SELECT m.title as title , m.id as movie_id, r.rate as rating FROM Movie m
- INNER JOIN Rating r ON m.id = r.movie_id;