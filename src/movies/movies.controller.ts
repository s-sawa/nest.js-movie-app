import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Movie } from '../entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: number): Movie {
    return this.moviesService.findById(id);
  }

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.moviesService.create(createMovieDto);
  }

  @Patch(':id/rating')
  updateRating(
    @Param('id', ParseUUIDPipe) id: number,
    @Body('rating') newRating: number,
  ) {
    return this.moviesService.updateRating(id, newRating);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: number): void {
    this.moviesService.delete(id);
  }
}
