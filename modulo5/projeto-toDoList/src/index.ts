import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from './database/connection';
import { Usuario } from './types';

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