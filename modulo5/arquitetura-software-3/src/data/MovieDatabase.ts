import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../model/Movie";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, duration_in_minutes, year_of_release }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  async select(){
    try {
      const movies: Movie[] = [];

      const result = await 
      MovieDatabase
        .connection
        .select("*")
        .from(MovieDatabase.TABLE_NAME)

      for(let movie of result){
        movies.push(movie)
      }
      return movies
    
      } catch (error:any) {
      throw new Error(error.message)
    }
  }
}
