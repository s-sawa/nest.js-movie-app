import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Movie {
    return this.moviesService.findById(id);
  }

  @Post()
  create(
    @Body('id') id: number,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('rating') rating: number,
    @Body('review') review: string,
  ): Movie {
    const movie: Movie = {
      id: id,
      title,
      description,
      rating,
      review,
    };
    return this.moviesService.create(movie);
  }

  @Patch(':id/rating')
  updateRating(@Param('id') id: number, @Body('rating') newRating: number) {
    return this.moviesService.updateRating(id, newRating);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.moviesService.delete(id);
  }
}
