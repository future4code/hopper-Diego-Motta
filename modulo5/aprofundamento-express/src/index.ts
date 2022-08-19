import express, {Request, Response} from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

type afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const arrAfazeres: afazeres[] = [
    {userId: 1, id: 1, title: "Emitir notas Corujando", completed: true},
    {userId: 1, id: 2, title: "Retificar divergencias Sefaz", completed: true},
    {userId: 1, id: 3, title: "Verificar pendencias trabalhistas Neuron", completed: false},
    {userId: 1, id: 4, title: "Atualizar Livro Caixa Integre", completed: false},
    {userId: 1, id: 5, title: "Pagar DAS Nexus", completed: false},
]

app.get("/afazeres", (req: Request, res: Response) => {
    console.log(req.query.completed)
    res.send(arrAfazeres.filter((status) =>{if(req.query.completed === status.completed.toString()){return status}}))
})

app.post("/afazeres", (req: Request, res: Response) => {
    let novaTarefa: afazeres ={
        userId: req.body.userId,
        id: arrAfazeres.length +1,
        title: req.body.title,
        completed: req.body.completed
    }
    res.send(novaTarefa) 
    console.log(novaTarefa)
})

