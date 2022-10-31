import { MovieDatabase } from '../data/MovieDatabase'
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  async create({ title, description, duration_in_minutes, year_of_release }: any):Promise<void> {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error("Dados inválidos (titulo, descrição, duração em minutos, ano")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release,
    })
  }

  async select(){
    return await new MovieDatabase().select();
  }

}
