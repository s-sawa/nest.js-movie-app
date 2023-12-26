import { Injectable } from '@nestjs/common';
import { Movie, Rating } from './movie.model';

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

  updateRating(id: number, newRating: Rating): Movie {
    const movie = this.findById(id);
    movie.rating = newRating;
    return movie;
  }
}
