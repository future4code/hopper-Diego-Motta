import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness{
   public createUser = async (input: any) => {
      try {
         const { name, email, password } = input
   
         if (
            !name ||
            !email ||
            !password
         ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
         }
   
         const id: string = Date.now().toString()
   
         const userDatabase = new UserDatabase()
   
         await userDatabase.insertUser({
            id,
            name,
            email,
            password
         })
   
      } catch (error:any) {
         throw new Error(error.message)
      }
   }

   public getUsers = async() => {
      return await new UserDatabase().selectUser();
   }

   public deleteUser = async(input: {id: string}) => {
      if(!input.id){
         throw new Error("Insira um id")
      }

      return await new UserDatabase().deleteUser(input.id);
   }
}
