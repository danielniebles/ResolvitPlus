import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Swiper from "../components/Swiper";
import usePopularMovies from "../hooks/usePopularMovies";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 2rem;
`;

const Popular = () => {
  const { popularMovies } = usePopularMovies();

  return (
    <SectionContainer>
      <Swiper
        swiperParams={{
          slidesPerView: "auto",
          spaceBetween: 30,
        }}
      >
        {popularMovies.map(
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
      </Swiper>
    </SectionContainer>
  );
};

export default Popular;
