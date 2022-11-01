import { useEffect, useState } from "react";
import getPopular from "../services/getPopular";

const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopular().then((res) => setPopularMovies(res));
  }, []);

  return { popularMovies };
};

export default usePopularMovies;
