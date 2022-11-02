import getByParams from "../../services/getByParams";
import getMovies from "../../services/getMovies";
import getMoviesByKeyword from "../../services/getMoviesByKeyword";

const handleSearchAction = ({
  searchMode,
  type,
  page,
  version,
  keyword,
  query,
  setMovies,
}) => {
  console.log(searchMode)
  const actions = {
    initial: () => {
      console.log('test')
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
    }
  };

  return actions[searchMode]()
};

export default handleSearchAction;