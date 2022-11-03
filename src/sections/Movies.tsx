import SectionHeader from "../components/SectionHeader";
import SearchBar from "../components/SearchBar";
import MoviesGrid from "../components/MoviesGrid";
import { useLocation } from "wouter";
import useSearchMode from "../hooks/useSearchMode";
import styled from "styled-components";

const SectionContainer = styled.section`
  margin: auto;
  max-width: 1280px;
  padding: 2rem;
`;

const Movies = () => {
  const {
    movies = [],
    setPage,
    setKeyword,
    setSearchMode,
  } = useSearchMode({ type: "now_playing", version: "basic" });
  const [, pushLocation] = useLocation();

  return (
    <>
      <SectionHeader
        title="Movies"
        icon="uil uil-film"
        onClick={() => {
          pushLocation("/search");
        }}
      />
      <SectionContainer>
        <SearchBar
          setKeyword={setKeyword}
          setSearchMode={setSearchMode}
          setPage={setPage}
        />
        <MoviesGrid movies={movies} setPage={setPage} />
      </SectionContainer>
    </>
  );
};

export default Movies;
