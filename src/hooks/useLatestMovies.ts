import { useEffect, useState } from "react";
import getBySearch from "../services/getBySearch";
import getLatest from "../services/getLatest";

const useLatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getLatest({ page }).then((res) => setLatestMovies(res));
  }, []);

  useEffect(() => {
    if (page === 1 || keyword.length > 1) return;
    getLatest({ page }).then((res) =>
      setLatestMovies((prev) => prev.concat(res))
    );
  }, [page]);

  // TODO: Handle pagination reset
  useEffect(() => {
    if (keyword === "") return;
    getBySearch({ page, keyword }).then((res) => {
      setLatestMovies((prev) => (page > 1 ? prev.concat(res) : res));
    });
  }, [keyword, page]);

  return { latestMovies, setPage, setKeyword };
};

export default useLatestMovies;
