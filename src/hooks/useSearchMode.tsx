import { useEffect, useState } from "react";
import { RawMovie } from "../shared/interfaces/RawMovie";
import handleSearchAction from "./utils/handleSearchAction";

interface Props {
  type: string;
  version: string;
  query?: string;
}

const useSearchMode = ({ type, version, query }: Props) => {
  const [searchMode, setSearchMode] = useState("initial");
  const [movies, setMovies] = useState<RawMovie[]>([]);
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
      query: query as string,
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
      query: query as string,
      setMovies,
    });
  }, [page]);

  return { setSearchMode, setPage, setKeyword, setGenre, movies, genre };
};

export default useSearchMode;
