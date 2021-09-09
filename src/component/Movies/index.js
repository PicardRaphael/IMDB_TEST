
import MovieCard from '../MovieCard';
import {
    MyDivGlobal,
    MyGrid,
    MyGridItem
} from './style/MoviesStyle';

const  Movies = ({ movies }) => (
    <MyDivGlobal>
        <MyGrid container spacing={3}>
            {
                movies.map((movie) => (
                    <MyGridItem item xs={6} md={3} key={movie.id}>
                        <MovieCard movie={movie} />
                    </MyGridItem>
                ))
            }
        </MyGrid>
    </MyDivGlobal>
);
  
export default Movies;
  