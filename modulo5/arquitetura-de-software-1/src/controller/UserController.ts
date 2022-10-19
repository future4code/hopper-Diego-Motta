import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController{

   public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, email, password } = req.body
   
         const input = {
            name,
            email,
            password
         }
   
         const userBusiness = new UserBusiness()
         await userBusiness.createUser(input)
   
         res.status(201).send({ message: "Usuário criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   public getUsers = async (
      req: Request,
      res: Response
   ) => {
      try {
         const users = await new UserBusiness().getUsers();

         res.send(users).status(200);
         
      } catch (error:any) {
         res.status(400).send(error.message)
      }
      
   }

   public deleteUser = async(
      req: Request,
      res: Response
   ) => {
      try {
         const input = {id: req.params.id}

         await new UserBusiness().deleteUser(input);

         res.status(200).send({message: "Usuário Deletado!"})
         
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

}