import { Injectable, NotFoundException } from '@nestjs/common';
// import { Movie } from './movie.model';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { MovieRepository } from './movie.repository';
import { Movie } from '../entities/movie.entity';
// import { Movie } from 'src/entities/movie.entity';

Movie;
@Injectable()
export class MoviesService {
  constructor(private readonly movieRepository: MovieRepository) {}
  private movies: Movie[] = [];

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }
  async findById(id: number): Promise<Movie> {
    const found = await this.movieRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(); // 見つからないときに404レスポンスを返す
    }
    return found;
  }
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.movieRepository.createMovie(createMovieDto);
  }

  async updateRating(id: number, newRating: number): Promise<Movie> {
    const movie = await this.findById(id);
    movie.rating = newRating;
    await this.movieRepository.save(movie);
    return movie;
  }

  async delete(id: number): Promise<void> {
    await this.movieRepository.delete({ id });
  }
}
