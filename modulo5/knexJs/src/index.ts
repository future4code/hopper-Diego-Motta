import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import connection from "./database/connection";
import { Usuario } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/usuarios", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const busca = req.query.busca

    if(busca) {
      const resultado = await connection.raw(`
       SELECT * FROM Funcionarios 
       WHERE name like "%${busca}%"; 
      `)

      res.status(200).send(resultado[0])
    }

    const resultado = await connection.raw(`
      SELECT * FROM Funcionarios;
    `)

    res.status(200).send(resultado[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/usuarios",async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {name, email} = req.body

    if(!name || !email){
       throw new Error("Passe o nome e e-mail do funcionário")
    }
    if(typeof name != 'string' || typeof email != 'string'){
      throw new Error("Dados inválidos")
    }
    if(!email.includes('@')){
      throw new Error("E-mail inválido")
    }
    if(name.length<4){
      throw new Error("O nome do usuário deve ter ao menos 4 caracteres")
    }

    const novoUsuario: Usuario = {
      id: Number(String(Date.now()).slice(-4)),
      name,
      email
    }

    await connection.raw(`
      INSERT INTO Funcionarios(id, name, email)
      VALUES(${novoUsuario.id}, "${novoUsuario.name}", "${novoUsuario.email}")
    `)

    res.status(200).send("Usuário criado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }  
})

app.put("/usuarios/:id",async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const email = req.body.email
    
    const usuarios = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id}
    `)

    if(usuarios[0].length === 0){
      throw new Error("Id inválido");
    }
    if(!email.includes('@')){
      throw new Error("E-mail inválido")
    }
    if(typeof email != 'string'){
      throw new Error("Tipo do e-mail inválido")
    }


    await connection.raw(`
      UPDATE Funcionarios
      SET email = "${email}"
      WHERE id = ${id};
    `)
  
    res.status(200).send("E-mail alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.delete("/usuarios/:id",async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const usuarios = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE id = ${id}
  `)

  if(usuarios[0].length === 0){
    throw new Error("Id inválido");
  }

  await connection.raw(`
    DELETE FROM Funcionarios
    WHERE id = ${id}
  `)

  res.status(200).send("Usuário deletado")
  
  } catch (error) {
    res.status(errorCode).send(error.message)
  } 
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});