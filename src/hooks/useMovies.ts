import { useEffect, useState } from "react";
import getMovies from "../services/getMovies";
import { RawMovie } from "../shared/interfaces/RawMovie";

const useMovies = ({ type, version }: { type: string; version: string }) => {
  const [movies, setMovies] = useState<RawMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getMovies({ type, page, version }).then((res) => {
      setLoading(false);
      setMovies(res);
    });
  }, []);

  useEffect(() => {
    if (page === 1) return;
    setLoading(true);
    getMovies({ type, page, version }).then((res) => {
      setLoading(false);
      setMovies((prev) => prev.concat(res));
    });
  }, [page]);

  return { movies, setPage, loading };
};

export default useMovies;
