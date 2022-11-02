import MoviesGrid from "../components/MoviesGrid";
import SearchBar from "../components/SearchBar";
import useDiscoverMovies from "../hooks/useDiscoverMovies";
import { useLocation } from "wouter";
import { useEffect, useState, ChangeEvent } from "react";

const AdvancedSearch = () => {
  const [windowQuery, setWindowQuery] = useState(window.location.search)
  const {
    movies = [],
    setPage,
    setKeyword,
    setGenre,
  } = useDiscoverMovies({ query: windowQuery || '?' });
  const [, pushLocation] = useLocation();

  const handleGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(parseInt(event.target.value));
    pushLocation(`/search?with_genres=${event.target.value}`);
  };

  useEffect(() => {
    setPage(1)
    setWindowQuery(window.location.search)
  }, [window.location.search]);

  return (
    <>
      <SearchBar setKeyword={setKeyword} onSubmit={() => {}} />
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
