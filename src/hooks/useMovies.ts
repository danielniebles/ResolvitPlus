import { useEffect, useState } from "react";
import getMovies from "../services/getMovies";
import { RawMovie } from "../shared/interfaces/RawMovie";

const useMovies = ({ type, version }: { type: string; version: string }) => {
  const [movies, setMovies] = useState<RawMovie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies({ type, page, version }).then((res) => setMovies(res));
  }, []);

  useEffect(() => {
    if (page === 1) return;
    getMovies({ type, page, version }).then((res) =>
      setMovies((prev) => prev.concat(res))
    );
  }, [page]);


  return { movies, setPage };
};

export default useMovies;
