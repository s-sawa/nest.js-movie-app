import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  PipeTransform,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie, Rating } from './movie.model';
/*
  リクエストデータに対する変換はコントローラ内に書く
  映画の評価の更新データはリクエストボディで文字列で受け取り、
  パイプを用いて受け取った文字列に対応するバリューを返す必要がある
  */

export class RatingPipe implements PipeTransform {
  transform(value: string): Rating {
    const rating = Rating[value as keyof typeof Rating];
    return rating;
  }
}

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
    @Body('rating') rating: Rating,
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
  updateRating(
    @Param('id') id: number,
    @Body('rating', RatingPipe) newRating: Rating,
  ) {
    return this.moviesService.updateRating(id, newRating);
  }
}
