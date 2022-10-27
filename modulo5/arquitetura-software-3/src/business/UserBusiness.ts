import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { UserInputDTO } from "../model/userDTO"
import { CustomError } from "../error/CustomError"

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new CustomError(400, "Dados inválidos (email, name, password)")
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
