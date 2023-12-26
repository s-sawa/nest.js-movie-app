import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movie.model';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MoviesService {
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
  create(createMovieDto: CreateMovieDto): Movie {
    const movie: Movie = {
      id: uuid(),
      ...createMovieDto,
    };
    this.movies.push(movie);
    return movie;
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
