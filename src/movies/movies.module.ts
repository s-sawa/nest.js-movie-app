import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieRepository } from './movie.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  // AuthModuleのexportに記述したproviderをmovie.moduleで使えるようになる
  imports: [TypeOrmModule.forFeature([MovieRepository]), AuthModule],
})
export class MoviesModule {}
