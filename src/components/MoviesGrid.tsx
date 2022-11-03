import { useEffect } from "react";
import styled from "styled-components";
import useIntersection from "../hooks/useIntersection";
import { RawMovie } from "../shared/interfaces/RawMovie";
import MovieCard from "./MovieCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  padding: 30px;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    place-items: center;
  }
`;

interface MoviesGridProps {
  movies: RawMovie[];
  setPage: (arg: any) => any;
}

const MoviesGrid = ({ movies, setPage }: MoviesGridProps) => {
  const { containerRef, isVisible } = useIntersection();

  useEffect(() => {
    if (!isVisible) return;
    setPage((prev: number) => prev + 1);
  }, [isVisible]);

  return (
    <>
      <Container>
        {movies.map(
          ({
            vote_average: rating,
            original_title: title,
            poster_path: posterPath,
            id,
            genres,
          }) => {
            return (
              <MovieCard
                rating={rating}
                title={title}
                genres={genres}
                posterPath={posterPath}
                key={id}
              />
            );
          }
        )}
      </Container>
      <div ref={containerRef}></div>
    </>
  );
};

export default MoviesGrid;
