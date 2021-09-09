import api from '../../config/api';
import useFetch from '../../utils/useFetch';
import MyCircularProgress from '../../styles/CircularProgressStyle';
import Movies from '../../component/Movies';

const  MoviesContainer = () => {
  const {isLoading, response, error} = useFetch(api.url_movies, 50)
  if (isLoading) {
    return <MyCircularProgress size={60} />
  }

  if (error) {
    console.log(error);
    return <MyCircularProgress size={60} />
  }
  
  return (
    <Movies  movies={response}/>
  );
}
  
export default MoviesContainer;
  