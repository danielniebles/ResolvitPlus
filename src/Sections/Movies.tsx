import { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SectionHeader from "../components/SectionHeader";
import useLatestMovies from "../hooks/useLatestMovies";
import useIntersection from "../hooks/useIntersection";
import SearchBar from "../components/SearchBar";

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 30px;
  min-height: 50vh;
`;

const Movies = () => {
  const { latestMovies, setPage, setKeyword } = useLatestMovies();
  const { containerRef, isVisible } = useIntersection();

  useEffect(() => {
    if(!isVisible) return;
    setPage((prev) => prev + 1);
  }, [isVisible]);

  return (
    <>
      <SectionHeader title="Movies" icon="uil uil-film" />
      <SearchBar setKeyword={setKeyword} />
      <MoviesGrid>
        {latestMovies.map(
          ({
            vote_average: rating,
            original_title: title,
            poster_path: posterPath,
          }) => {
            return (
              <MovieCard
                rating={rating}
                title={title}
                genres={[]}
                posterPath={posterPath}
              />
            );
          }
        )}
      </MoviesGrid>
      <div ref={containerRef}></div>
    </>
  );
};

export default Movies;
