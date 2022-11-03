import { useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import MovieCover from "../components/MovieCover";
import Swiper from "../components/Swiper";
import useMovies from "../hooks/useMovies";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  height: 50vh;
  align-items: center;
  .swiper {
    height: inherit;
  }
`;

const Cover = () => {
  const { movies, loading } = useMovies({
    type: "upcoming",
    version: "extended",
  });

  return (
    <SectionContainer>
      {loading ? (
        <Loader />
      ) : (
        <Swiper
          swiperParams={{
            slidesPerView: 1,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
          }}
          hideControls
        >
          {movies.map(
            ({
              vote_average: rating,
              original_title: title,
              images: { backdrops },
              overview,
              id,
            }) => (
              <MovieCover
                rating={rating}
                title={title}
                backdrops={backdrops}
                overview={overview}
                key={id}
              />
            )
          )}
        </Swiper>
      )}
    </SectionContainer>
  );
};

export default Cover;
