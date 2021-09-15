import PropTypes from "prop-types";

import {
  MyCard,
  MyCardContent,
  MyCardMedia,
  MyTitle,
  MyDivImg,
  MyDivGlobalImg,
  MyIconFavorite,
  MyIconNoneFavorite,
} from "./style/MovieCardStyle";

const MovieCard = ({ movie, toggleFavorite, inFavorite }) => (
  <MyCard>
    <MyDivGlobalImg>
      <MyDivImg>
        <MyCardMedia
          component="img"
          src={movie.poster_path}
          alt={movie.title}
        />
      </MyDivImg>
    </MyDivGlobalImg>
    <MyCardContent>
      <MyTitle>{movie.title}</MyTitle>
      {inFavorite ? (
        <MyIconFavorite onClick={() => toggleFavorite(movie)} />
      ) : (
        <MyIconNoneFavorite onClick={() => toggleFavorite(movie)} />
      )}
    </MyCardContent>
  </MyCard>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  inFavorite: PropTypes.bool.isRequired,
};

export default MovieCard;
