import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Swiper from "../components/Swiper";
import SectionHeader from "../components/SectionHeader";
import useMovies from "../hooks/useMovies";
import { useLocation } from "wouter";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1280px;
  padding: 2rem;
`;

const Popular = () => {
  const { movies } = useMovies({ type: "top_rated", version: "basic" });
  const [, pushLocation] = useLocation();

  return (
    <>
      <SectionHeader
        title="Trending Now"
        icon="uil uil-arrow-growth"
        onClick={() => {
          pushLocation("/search");
        }}
      />
      <SectionContainer>
        <Swiper
          swiperParams={{
            slidesPerView: "auto",
            spaceBetween: 30,
          }}
          hideControls={false}
        >
          {movies.map(
            ({
              id,
              vote_average: rating,
              original_title: title,
              poster_path: posterPath,
            }) => {
              return (
                <MovieCard
                  key={id}
                  rating={rating}
                  title={title}
                  genres={[]}
                  posterPath={posterPath}
                />
              );
            }
          )}
        </Swiper>
      </SectionContainer>
    </>
  );
};

export default Popular;
