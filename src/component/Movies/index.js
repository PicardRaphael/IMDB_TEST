import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MovieCardContainer from "../../container/MovieCardContainer";
import ScrollTop from "../ScrollToTop";
import { MyDivGlobal, MyGrid, MyGridItem } from "./style/MoviesStyle";

const Movies = ({ movies, ...props }) => (
  <MyDivGlobal>
    <MyGrid container spacing={3}>
      {movies.map((movie) => (
        <MyGridItem item xs={6} md={2} key={movie.id}>
          <MovieCardContainer movie={movie} />
        </MyGridItem>
      ))}
    </MyGrid>
    <ScrollTop {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </MyDivGlobal>
);

export default Movies;
