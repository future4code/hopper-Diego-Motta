import express, {Express, Request, Response} from "express";
import { connection } from "../data/connection";
import selectAllUsers from "./selectAllUsers";


export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
      let errorCode = 400
      
      if(req.query.name){
         let nome = req.query.name as string;
         const user = await connection("aula48_exercicio").where("name", "like", `${nome}`);
         if(!user.length){
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user)
      }

      const users = await connection("aula48_exercicio");
      if(!users.length){
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }
 
      res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}