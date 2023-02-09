import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    async create(req: Request, res: Response):Promise<void>{
        try{
            const{photo, description, type, authorId} = req.body;
            const postBusiness = new PostBusiness();
            await postBusiness.create({photo, description, type, authorId});
            res.status(201).send({message: "Post criado"})
        } catch (error: any){
            res.status(400).send(error.message);
        }
    }

    async select(req: Request, res: Response){
        try{
            const posts = await new PostBusiness().select();
            res.send(posts).status(200);
        } catch (error:any){
            res.status(400).send(error.message);
        }
    }
}