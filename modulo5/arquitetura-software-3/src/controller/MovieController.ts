import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBussiness";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release} = req.body;

      const input: MovieInputDTO = {
        title,
        description,
        duration_in_minutes,
        year_of_release
      }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(req.body);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async select(req: Request, res: Response){
    try {
      const movies = await new MovieBusiness().select();
      res.send(movies).status(200);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}