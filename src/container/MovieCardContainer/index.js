import MovieCard from '../../component/MovieCard';
import { useMoviesContext } from '../../store/reducers/MoviesContext';
import {
    addFavorite,
    removeFavorite
} from '../../store/actions/moviesActions';
import { useState } from 'react';

const  MovieCardContainer = ({ movie }) => {
    const { stateMovies, dispatchMovies } = useMoviesContext();
    const [inFavorite, setInFavorite] = useState(stateMovies.favorites.find(mv => mv.id === movie.id));
    
    const toggleFavorite = (data) => {
        if(inFavorite) {
            dispatchMovies(removeFavorite(data))
            setInFavorite(false)
        } else {
            dispatchMovies(addFavorite(data))
            setInFavorite(true)
        } 
    }

    return (
        <MovieCard
            movie={movie}
            toggleFavorite={toggleFavorite}
            inFavorite={inFavorite}
        />
    )
}
  
export default MovieCardContainer;
  