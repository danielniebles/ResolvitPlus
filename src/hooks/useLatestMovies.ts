import { useEffect, useState } from "react";
import getLatest from "../services/getLatest";

const useLatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLatest({ page }).then((res) => setLatestMovies(res));
  }, []);

  useEffect(() => {
    if (page === 1) return;
    getLatest({ page }).then((res) =>
      setLatestMovies((prev) => prev.concat(res))
    );
  }, [page]);

  return { latestMovies, setPage };
};

export default useLatestMovies;
