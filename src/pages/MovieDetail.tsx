import { useEffect } from "react";
import styled from "styled-components";
import useMovieDetail from "../hooks/useMovieDetail";
import { RawMovie } from "../shared/interfaces/RawMovie";
import buildImageUrl from "../utils/buildImageUrl";
import PrimaryButton from "../components/PrimaryButton";
import IconTag from "../components/IconTag";
import Loader from "../components/Loader";
import { RouteComponentProps } from "wouter";

const Container = styled.div<{ poster_path?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  .main__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 50vh;

    .poster {
      background-clip: border-box;
      background-image: url(${({ poster_path }) => poster_path});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .main__info {
      display: grid;
      gap: 10px;
      flex-direction: column;
      align-items: start;
      padding: 0 50px;
      height: fit-content;
      .overview {
        text-align: start;
      }
    }
    .additional__info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    .main__content {
      padding: 0px;
      grid-template-columns: 1fr;
      height: 100vh;
      align-items: center;
      .main__info {
        padding: 20px;
      }
    }
    .poster {
      height: 500px;
    }
  }
`;

const MovieDetail = ({ params }: RouteComponentProps<{ id: string }>) => {
  const { id } = params;

  const { movie, loading } = useMovieDetail({ id });
  const {
    poster_path,
    overview,
    original_title,
    vote_average,
    release_date,
    revenue,
    tagline,
    runtime,
  } = movie as RawMovie;

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <>
      {loading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <Container
          poster_path={buildImageUrl({ width: 500, imgPath: poster_path })}
        >
          <div className="main__content">
            <div className="poster"></div>
            <div className="main__info">
              <h2>{original_title}</h2>
              <p>{tagline}</p>
              <p className="overview">{overview}</p>
              <div className="additional__info">
                <IconTag
                  value={vote_average}
                  icon="uis uis-star"
                  color="#ffff00"
                />
                <IconTag
                  value={release_date as string}
                  icon="uil uil-calender"
                  color="#e76921"
                />
                <IconTag
                  value={new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "USD",
                  }).format(revenue as number)}
                  icon="uil uil-usd-circle"
                  color="#30b02c"
                />
                <IconTag
                  value={runtime as string}
                  icon="uil uil-hourglass"
                  color="#1f82c4"
                />
              </div>
              <PrimaryButton text="Homepage" onClick={() => {}} border="10px" />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
