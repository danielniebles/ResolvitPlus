import { useEffect } from "react";
import styled from "styled-components";
import MovieCover from "../components/MovieCover";
import Swiper from "../components/Swiper";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  height: 50vh;
`;

const Cover = () => {
  const { upcomingMovies } = useUpcomingMovies();

  return (
    <SectionContainer>
      <Swiper
        swiperParams={{
          slidesPerView: 1,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        }}
      >
        {upcomingMovies.map(
          ({
            vote_average: rating,
            original_title: title,
            backdrops,
            overview,
          }) => (
            <MovieCover
              rating={rating}
              title={title}
              backdrops={backdrops}
              overview={overview}
            />
          )
        )}
      </Swiper>
    </SectionContainer>
  );
};

export default Cover;
