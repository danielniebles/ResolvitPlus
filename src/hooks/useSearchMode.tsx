import { useEffect, useState } from "react";
import getByParams from "../services/getByParams";
import getMovies from "../services/getMovies";
import getMoviesByKeyword from "../services/getMoviesByKeyword";
import handleSearchAction from "./utils/handleSearchAction";

const useSearchMode = ({
  type,
  version,
  query,
}: {
  type: string;
  version: string;
  query?: string;
}) => {
  const [searchMode, setSearchMode] = useState("initial");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState(18);

  useEffect(() => {
    setMovies([]);
    setPage(1);

    handleSearchAction({
      searchMode,
      type,
      page,
      version,
      keyword,
      query,
      setMovies,
    });
  }, [searchMode, keyword, query]);

  useEffect(() => {
    if (page === 1) return;

    handleSearchAction({
      searchMode,
      type,
      page,
      version,
      keyword,
      query,
      setMovies,
    });
  }, [page]);

  return { setSearchMode, setPage, setKeyword, setGenre, movies, genre };
};

export default useSearchMode;
