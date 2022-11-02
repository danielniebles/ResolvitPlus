import { useEffect, useState } from "react";
import getMoviesByKeyword from "../services/getMoviesByKeyword";
import getMovies from "../services/getMovies";

const useMovies = ({ type, version }: { type: string; version: string }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getMovies({ type, page, version }).then((res) => setMovies(res));
  }, []);

  useEffect(() => {
    if (page === 1 || keyword.length > 1) return;
    getMovies({ type, page, version }).then((res) =>
      setMovies((prev) => prev.concat(res))
    );
  }, [page]);

  // TODO: Handle pagination reset
  useEffect(() => {
    if (keyword === "") return;
    getMoviesByKeyword({ page, keyword }).then((res) => {
      setMovies((prev) => (page > 1 ? prev.concat(res) : res));
    });
  }, [keyword, page]);

  return { movies, setPage, setKeyword };
};

export default useMovies;
