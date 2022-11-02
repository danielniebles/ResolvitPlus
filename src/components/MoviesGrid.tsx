import { useEffect } from "react";
import styled from "styled-components";
import useIntersection from "../hooks/useIntersection";
import Genre from "../interfaces/Genre";
import MovieCard from "./MovieCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 30px;
  min-height: 100vh;
`;

const MoviesGrid = ({
  movies,
  setPage,
}: {
  movies: {
    id: number;
    vote_average: number;
    original_title: string;
    poster_path: string;
  }[];
  setPage: (arg: any) => any;
}) => {
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
          }) => {
            return (
              <MovieCard
                rating={rating}
                title={title}
                genres={[]}
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
