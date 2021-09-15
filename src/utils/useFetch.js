import { useState, useEffect } from "react";

const useFetch = (url, number) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      let page = 1;
      let data = [];
      while (data.length < number) {
        const res = await fetch(`${url}${page}`);
        const json = await res.json();
        if (res.status >= 400) {
          return reject(json.status_message);
        }
        data = data.concat(json.results);
        page += 1;
      }
      data.map(
        (d) =>
          (d.poster_path = `http://image.tmdb.org/t/p/w300${d.poster_path}`)
      );
      resolve(data);
    });
  };

  useEffect(() => {
    if (!url) return;
    fetchData()
      .then((data) => setResponse(data.slice(0, number)))
      .catch((m) => setError(m))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, isLoading };
};
export default useFetch;
