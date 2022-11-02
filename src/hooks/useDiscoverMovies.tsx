import { useEffect, useState } from "react";
import getByParams from "../services/getByParams";
import getBySearch from "../services/getBySearch";
import getLatest from "../services/getLatest";

const useDiscoverMovies = ({ query }: { query: string }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState(18);
  const [year, setYear] = useState("");

  useEffect(() => {
    getByParams({ page: 1, queryString: `?with_genres=${genre}` }).then((res) =>
      setMovies(res)
    );
  }, []);

  useEffect(() => {
    if (page === 1 || keyword.length > 1) return;
    console.log({ query });
    getByParams({ page, queryString: query }).then((res) =>
      setMovies((prev) => prev.concat(res))
    );
  }, [page]);

  useEffect(() => {
    if (!query) return;
    getByParams({ queryString: query, page }).then((res) => {
      setMovies((prev) => (page > 1 ? prev.concat(res) : res));
    });
  }, [query]);

  return { movies, setPage, setKeyword, setGenre, setYear };
};

export default useDiscoverMovies;
