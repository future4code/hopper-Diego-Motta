import { BaseDatabase } from "./BaseDatabase";
import { Post } from "../types/Post";

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts";

    async create({id, photo, description, type, createdAt, authorId}: any): Promise<void>{
        await PostDatabase.connection
            .insert({
                id,
                photo,
                description,
                type,
                createdAt,
                authorId,
            })
            .into(PostDatabase.TABLE_NAME)
    }

    async select(){
        try{
            const posts: Post[] = [];

            const result = await
            PostDatabase
                .connection
                .select("*")
                .from(PostDatabase.TABLE_NAME)

            for(let post of result){
                posts.push(post)
            }
            return posts
        }
        catch(error:any){
            throw new Error(error.message)
        }
    }
}

// protected async getById(id: string){
//     const result = await BaseDatabase.connection(this.TABLE_NAME).select().where({id})
//     return result
// }