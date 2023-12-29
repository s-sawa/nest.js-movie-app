import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Movie } from '../entities/movie.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: number): Promise<Movie> {
    return await this.moviesService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.moviesService.create(createMovieDto);
  }

  @Patch(':id/rating')
  @UseGuards(JwtAuthGuard)
  async updateRating(
    @Param('id', ParseUUIDPipe) id: number,
    @Body('rating') newRating: number,
  ): Promise<Movie> {
    return await this.moviesService.updateRating(id, newRating);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', ParseUUIDPipe) id: number): Promise<void> {
    await this.moviesService.delete(id);
  }
}
