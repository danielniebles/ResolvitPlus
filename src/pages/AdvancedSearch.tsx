import MoviesGrid from "../components/MoviesGrid";
import SearchBar from "../components/SearchBar";
import useDiscoverMovies from "../hooks/useDiscoverMovies";
import { useLocation } from "wouter";
import { useEffect, useState, ChangeEvent } from "react";
import useSearchMode from "../hooks/useSearchMode";

const AdvancedSearch = () => {
  const [windowQuery, setWindowQuery] = useState(window.location.search);
  const {
    movies = [],
    setPage,
    setKeyword,
    setGenre,
    setSearchMode,
  } = useSearchMode({
    type: "now_playing",
    version: "basic",
    query: windowQuery || `?withGenres=18`,
  });
  const [, pushLocation] = useLocation();

  const handleGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(parseInt(event.target.value));
    setSearchMode("byParams");
    setPage(1);
    pushLocation(`/search?withGenres=${event.target.value}`);
  };

  useEffect(() => {
    setPage(1);
    setWindowQuery(window.location.search);
  }, [window.location.search]);

  return (
    <>
      <SearchBar
        setKeyword={setKeyword}
        setPage={setPage}
        setSearchMode={setSearchMode}
      />
      <div onChange={handleGenre}>
        <input type="radio" value={28} name="genre" /> Action
        <input type="radio" value={35} name="genre" /> Comedy
        <input type="radio" value={18} name="genre" /> Drama
      </div>
      <MoviesGrid movies={movies} setPage={setPage} />
    </>
  );
};

export default AdvancedSearch;
