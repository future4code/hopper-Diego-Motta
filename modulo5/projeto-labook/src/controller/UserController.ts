import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async create(req: Request, res: Response):Promise<void>{
        try{
            const{name, email, password} = req.body;
            const userBusiness = new UserBusiness();
            await userBusiness.create({name, email, password});
            res.status(201).send({message: "Usuário cadastrado"});
        } catch (error:any){
            res.status(400).send(error.message);
        }
    }

    async select(req: Request, res: Response){
        try{
            const users = await new UserBusiness().select();
            res.send(users).status(200);
        } catch (error:any){
            res.status(400).send(error.message);
        }
    }
}