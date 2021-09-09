import PropTypes from 'prop-types';

import {
    MyCard,
    MyCardContent,
    MyCardMedia,
    MyTitle,
    MyDivImg
} from './style/MovieCardStyle';

const MovieCard = ({ movie }) => {
    return (
        <MyCard>
            <MyDivImg>
                <MyCardMedia component="img" src={movie.poster_path} alt={movie.title}/>
            </MyDivImg>
            <MyCardContent>
                <MyTitle>{movie.title}</MyTitle>
            </MyCardContent>
        </MyCard>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
}

export default MovieCard;
    