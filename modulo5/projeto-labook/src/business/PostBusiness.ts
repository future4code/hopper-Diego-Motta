import { PostDatabase } from "../data/PostDatabase";
import { v4 as generateId} from "uuid";

export class PostBusiness {
    async create({photo, description, type, authorId}:any): Promise<void>{
        if(!photo || !description || !type || !authorId){
            throw new Error("Dados inválidos")
        }
        const id = generateId()
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const postDatabase = new PostDatabase()
        await postDatabase.create({
            id,
            photo,
            description,
            type,
            createdAt,
            authorId
        })
    }

    async select(){
        return await new PostDatabase().select();
    }
}