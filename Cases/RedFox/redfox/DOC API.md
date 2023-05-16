# Documentação da API

Esta documentação descreve os endpoints disponíveis na API para gerenciar informações sobre Pokémon.

Base URL: `http://localhost:3000`

## Autenticação

Esta API não requer autenticação.

## Endpoints

### 1. Pesquisar Pokémon por nome

Retorna informações sobre um Pokémon com base no nome fornecido.

**Endpoint:** `/poke/search-name`

**Método:** GET

**Parâmetros de consulta:**
- `name` (string, obrigatório): O nome do Pokémon a ser pesquisado.

**Exemplo de solicitação:**
```
GET http://localhost:3000/poke/search-name?name=pikachu
Content-Type: application/json
```

**Exemplo de resposta:**
```json
{
  "name": "Pikachu",
  "pokedex_number": 25,
  "img_name": "pikachu.png",
  "generation": 1,
  "evolution_stage": "1",
  // Outras propriedades do Pokémon...
}
```

### 2. Pesquisar Pokémon por ID

Retorna informações sobre um Pokémon com base no ID fornecido.

**Endpoint:** `/poke/search-id/{id}`

**Método:** GET

**Parâmetros de URL:**
- `id` (integer, obrigatório): O ID do Pokémon a ser pesquisado.

**Exemplo de solicitação:**
```
GET http://localhost:3000/poke/search-id/212
Content-Type: application/json
```

**Exemplo de resposta:**
```json
{
  "name": "Scizor",
  "pokedex_number": 212,
  "img_name": "scizor.png",
  "generation": 2,
  "evolution_stage": "2",
  // Outras propriedades do Pokémon...
}
```

### 3. Obter todos os Pokémon

Retorna uma lista paginada de todos os Pokémon.

**Endpoint:** `/poke/get_all`

**Método:** GET

**Parâmetros de consulta:**
- `page` (integer, opcional): O número da página a ser retornada. Padrão: 1.

**Exemplo de solicitação:**
```
GET http://localhost:3000/poke/get_all?page=10
Content-Type: application/json
```

**Exemplo de resposta:**
```json
{
  "page": 10,
  "total_pages": 20,
  "pokemon": [
    {
      "name": "Charizard",
      "pokedex_number": 6,
      "img_name": "charizard.png",
      "generation": 1,
      "evolution_stage": "3",
      // Outras propriedades do Pokémon...
    },
    // Outros Pokémon na página 10...
  ]
}
```

### 4. Alterar informações de um Pokémon

Altera uma propriedade específica de um Pokémon.

**Endpoint:** `/poke/alterate/{id}`

**Método:** PATCH

**Parâmetros de URL:**
- `id` (integer, obrigatório): O ID do Pokémon a ser alterado.

**Corpo da solicitação:**
```json
{
  "field": "type_1",
  "body": "dragon"
}
```

**Exemplo de solicitação:**
```
PATCH http://localhost:3000/poke/alterate/201
Content-Type: application/json

{
    "field": "type_1",
    "body
