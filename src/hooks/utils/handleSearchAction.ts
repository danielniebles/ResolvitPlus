import { Dispatch, SetStateAction } from "react";
import getByParams from "../../services/getByParams";
import getMovies from "../../services/getMovies";
import getMoviesByKeyword from "../../services/getMoviesByKeyword";
import { RawMovie } from "../../shared/interfaces/RawMovie";

interface Params {
  searchMode: string;
  type: string;
  page: number;
  version: string;
  keyword: string;
  query: string;
  setMovies: Dispatch<SetStateAction<RawMovie[]>>;
}

const handleSearchAction = ({
  searchMode,
  type,
  page,
  version,
  keyword,
  query,
  setMovies,
}: Params) => {
  const actions = {
    initial: () => {
      getMovies({ type, page, version }).then((res) => {
        setMovies((prev) => (page > 1 ? prev.concat(res) : res));
      });
    },
    byKeyword: () => {
      getMoviesByKeyword({ page, keyword }).then((res) => {
        setMovies((prev) => (page > 1 ? prev.concat(res) : res));
      });
    },
    byParams: () => {
      getByParams({ queryString: query, page }).then((res) => {
        setMovies((prev) => (page > 1 ? prev.concat(res) : res));
      });
    },
  };

  return actions[searchMode as keyof typeof actions]();
};

export default handleSearchAction;
