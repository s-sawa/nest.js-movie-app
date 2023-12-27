import { Movie } from 'src/entities/movie.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMovieDto } from './DTO/create-movie.dto';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
    async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
        const {title, description, rating, review} = createMovieDto;
        const movie = this.create({
            title,
            description,
            rating,
            review,
            createdAt: new Date().toISOString(),
            // updatedAt: new Date().toISOString(),
        });

        await this.save(movie);
        return movie;
    }
}
