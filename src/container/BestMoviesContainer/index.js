import api from "../../config/api";
import useFetch from "../../utils/useFetch";
import MyCircularProgress from "../../styles/CircularProgressStyle";
import Movies from "../../component/Movies";

const BestMoviesContainer = () => {
  const { isLoading, response, error } = useFetch(api.url_top_rated, 10);
  if (isLoading) {
    return <MyCircularProgress size={60} />;
  }

  if (error) {
    console.log(error);
    return <MyCircularProgress size={60} />;
  }

  return <Movies movies={response} />;
};

export default BestMoviesContainer;
