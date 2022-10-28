import { UserDatabase } from "../data/UserDatabase";
import {v4 as generateId} from 'uuid';

export class UserBusiness {
    async create({name, email, password}:any): Promise<void>{
        if(!email || !name || !password){
            throw new Error("Dados Inválidos")
        }
        const id = generateId()
        const userDatabase = new UserDatabase()
        await userDatabase.create({
            id,
            name,
            email,
            password
        })
    }

    async select(){
        return await new UserDatabase().select();
    }
}