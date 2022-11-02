import { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SectionHeader from "../components/SectionHeader";
import useIntersection from "../hooks/useIntersection";
import SearchBar from "../components/SearchBar";
import MoviesGrid from "../components/MoviesGrid";
import { useLocation } from "wouter";
import useSearchMode from "../hooks/useSearchMode";

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
      <SearchBar
        setKeyword={setKeyword}
        setSearchMode={setSearchMode}
        setPage={setPage}
      />
      <MoviesGrid movies={movies} setPage={setPage} />
    </>
  );
};

export default Movies;
