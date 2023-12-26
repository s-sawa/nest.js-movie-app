import { Injectable } from '@nestjs/common';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  findAll(): Movie[] {
    return this.movies;
  }
  findById(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }
  create(movie: Movie): Movie {
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
