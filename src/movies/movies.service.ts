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

  findAll(): Movie[] {
    return this.movies;
  }
  findById(id: number): Movie {
    const found = this.movies.find((movie) => movie.id === id);
    if (!found) {
      throw new NotFoundException(); // 見つからないときに404レスポンスを返す
    }
    return found;
  }
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.movieRepository.createMovie(createMovieDto);
  }

  updateRating(id: number, newRating: number): Movie {
    const movie = this.findById(id);
    movie.rating = newRating;
    return movie;
  }
  delete(id: number): void {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
}
