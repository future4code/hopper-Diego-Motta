import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";



const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3004, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

type Contas = {
   nome: string,
   cpf: string,
   nascimento: string,
   saldo: number,
   extrato: Transacoes[]
}

const clientes: Contas[] = [
   {nome: "Diego Motta", cpf: "010.335.161-20", nascimento: "04/07/1993", saldo: 100, extrato: []}
]

type Transacoes ={
   entradas: string,
   saidas: string
}

app.post('/clientes', (req: Request, res: Response) => {
   let errorCode = 400
   try {
      const {nome, cpf, nascimento} = req.body

      if(!nome || !cpf || !nascimento){
         errorCode = 422
         throw new Error("Ausência de parâmetros no body")
      }
      
      if(cpf.length != 14){
          errorCode = 422
          throw new Error("Insira o CPF no formato xxx.xxx.xxx-xx");
      }

      if(nascimento.length != 10){
         errorCode = 422
         throw new Error("Insira a data de nascimento no formato dd/mm/aaaa");
      }
      
      var dezoitoAnosAtras = "27/08/2004"
      function process(date: any){
         var parts = date.split("/");
         var date:any = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
         return date.getTime();
      }
      if((process(nascimento)) >= (process(dezoitoAnosAtras))){
          errorCode = 422
          throw new Error("O cliente precisa ter mais do que 18 anos para se cadastrar")
      }

      const novoCliente: Contas = {
         nome,
         cpf,
         nascimento,
         saldo: 0,
         extrato: []
      }

      clientes.push(novoCliente)

      res.status(200).send({message: "Novo cliente cadastrado com sucesso", clientes})

   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})

app.get('/clientes', (req: Request, res: Response) => {
   res.status(200).send(clientes)
})