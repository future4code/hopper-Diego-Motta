import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from './database/connection';
import { Task, Usuario } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400 
  try {
   
   const {name, nickname, email} = req.body

   if(!name || !nickname || !email) {
      throw new Error("Dados incompletos");
   }

   const novoUsuario: Usuario = {
      id: Number(String(Date.now()).slice(-3)),
      name,
      nickname,
      email
   }

   await connection.raw(`
      INSERT INTO TodoListUser(id, name, nickname, email)
      VALUES(${novoUsuario.id}, "${novoUsuario.name}", "${novoUsuario.nickname}","${novoUsuario.email}")
   `)

   res.status(200).send("Usuário criado")
   
   } catch (error) {
      res.status(errorCode).send(error.message)
   }  
})

app.get("/user/:id", async (req: Request, res: Response) => {
   let errorCode = 400

   try {
   const id = Number(req.params.id)

   if (id) {
      const resultado = await connection.raw(`
        SELECT id, nickname FROM TodoListUser
        WHERE id = "${id}";
      `)

      return res.status(200).send(resultado[0])
    }

    const resultado = await connection.raw(`
      SELECT id, nickname FROM TodoListUser;
    `)

    res.status(200).send(resultado[0])
   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})

app.put("/user/edit/:id",async (req: Request, res: Response) => {
   let errorCode = 400

   try {
      const id = Number(req.params.id)
      const name = req.body.name
      const nickname = req.body.nickname
      
      if(!name){
         throw new Error("Preencha o nome do usuário");
      }
      if(!nickname){
         throw new Error("Preencha o apelido");
      }

      await connection.raw(`
         UPDATE TodoListUser
         SET name = "${name}", nickname = "${nickname}"
         WHERE id = ${id}
      `)

      res.status(200).send("Dados Alterados")
   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})

app.post("/task",async (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const {title, description, limitDate, creatorUserId} = req.body

      if(!title){throw new Error("Insira o título");}
      if(!description){throw new Error("Insira a descrição");}
      if(!limitDate){throw new Error("Insira a data limite");}
      if(!creatorUserId){throw new Error("Insira o ID do usuário");}

      const novaTarefa: Task = {
         id: Number(String((Date.now())*1.5).slice(-3)),
         title,
         description,
         status: "to_do",
         limitDate: limitDate.split("/").reverse().join("/"), 
         creatorUserId
      }

      await connection.raw(`
         INSERT INTO TodoListTask(id, title, description, status, limit_date, creator_user_id)
         VALUES(${novaTarefa.id}, "${novaTarefa.title}", "${novaTarefa.description}", "${novaTarefa.status}", ${novaTarefa.limitDate}, "${novaTarefa.creatorUserId}");
      `)

      res.status(200).send("Tarefa criada")
   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})

app.get("/task/:id",async (req: Request, res: Response) => {
   let errorCode = 400
   
   try {
      const idTarefa = req.params.id;
      
      const tarefa = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = "${idTarefa}"`)
      
      if (!tarefa) {throw new Error("Tarefa não encontrada");}

      const resultado = await connection.raw(`
      SELECT
      t.id,
      t.title,
      t.description,
      t.status,
      t.limit_date,
      t.creator_user_id,
      u.nickname
      FROM TodoListTask as t
      JOIN TodoListUser as u ON t.creator_user_id = u.id`);

      res.status(200).send(resultado[0])
   } catch (error) {
      res.status(errorCode).send(error.message)
   }
})