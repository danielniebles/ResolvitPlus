import { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SectionHeader from "../components/SectionHeader";
import useLatestMovies from "../hooks/useLatestMovies";
import useIntersection from "../hooks/useIntersection";
import SearchBar from "../components/SearchBar";
import MoviesGrid from "../components/MoviesGrid";
import { useLocation } from "wouter";

const Movies = () => {
  const { latestMovies = [], setPage, setKeyword } = useLatestMovies();
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
      <SearchBar setKeyword={setKeyword} onSubmit={() => {}} />
      <MoviesGrid movies={latestMovies} setPage={setPage} />
    </>
  );
};

export default Movies;
