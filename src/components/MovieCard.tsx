import styled from "styled-components";
import Genre from "../shared/interfaces/Genre";
import { Movie } from "../shared/interfaces/Movie";
import buildImageUrl from "../utils/buildImageUrl";
import Chip from "./Chip";
import Rating from "./Rating";

const CardContainer = styled.div<{ posterPath: string }>`
  background-clip: border-box;
  background-image: url(${({ posterPath }) => posterPath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
  max-width: 300px;
  min-width: 200px;
  :hover {
    transform: scale(1.05);
  }
  .info__footer {
    align-items: start;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    width: 100%;
    .movie-title {
      font-size: var(--h2-font-size);
      margin: 5px;
    }
    .genres {
      display: flex;
      gap: 10px;
    }
  }
`;

const MovieCard = ({ genres, rating, title, posterPath }: Movie) => {
  return (
    <CardContainer
      posterPath={buildImageUrl({ width: 500, imgPath: posterPath as string })}
    >
      <footer className="info__footer">
        <div className="genres">
          {(genres as Genre[]).slice(0, 2).map(({ name, color, id }) => (
            <Chip key={id} text={name} color={color} />
          ))}
        </div>
        <h2 className="movie-title">{title}</h2>
        <Rating rating={rating as number} />
      </footer>
    </CardContainer>
  );
};

export default MovieCard;
