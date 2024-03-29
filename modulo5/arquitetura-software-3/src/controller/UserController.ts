import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(req.body);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async select(req: Request, res: Response){
    try {
      const users = await new UserBusiness().select();
      res.send(users).status(200);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
