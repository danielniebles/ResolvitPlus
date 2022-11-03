import MoviesGrid from "../components/MoviesGrid";
import SearchBar from "../components/SearchBar";
import { useLocation } from "wouter";
import { useEffect, useState, ChangeEvent } from "react";
import useSearchMode from "../hooks/useSearchMode";
import styled from "styled-components";
import useGenres from "../hooks/useGenres";

const Container = styled.div`
  margin-top: 4rem;
  .genres {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    place-items: start;
    padding: 30px;
    .radio__label {
      margin-left: 10px;
    }
  }
`;

const AdvancedSearch = () => {
  const [windowQuery, setWindowQuery] = useState(window.location.search);
  const {
    movies = [],
    setPage,
    setKeyword,
    setGenre,
    setSearchMode,
    genre,
  } = useSearchMode({
    type: "now_playing",
    version: "basic",
    query: windowQuery || `?withGenres=18`,
  });
  const { genres } = useGenres();
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
    <Container>
      <SearchBar
        setKeyword={setKeyword}
        setPage={setPage}
        setSearchMode={setSearchMode}
      />
      <div onChange={handleGenre} className="genres">
        {genres.map(({ id, name }) => (
          <div>
            <input type="radio" value={id} name="genre" checked={genre===id} />
            <label className="radio__label">{name}</label>
          </div>
        ))}
      </div>
      <MoviesGrid movies={movies} setPage={setPage} />
    </Container>
  );
};

export default AdvancedSearch;
