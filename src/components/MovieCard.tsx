import styled from "styled-components";
import Genre from "../interfaces/Genre";
import Chip from "./Chip";
import Rating from "./Rating";

const CardContainer = styled.div`
  background-clip: border-box;
  background-image: url("https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  position: relative;
  width: 300px;
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

const MovieCard = ({
  genres,
  rating,
  title,
}: {
  genres: Genre[];
  rating: number;
  title: string;
}) => {
  return (
    <CardContainer>
      <footer className="info__footer">
        <div className="genres">
          {genres.slice(0, 2).map(({ name, color }) => (
            <Chip text={name} color={color} />
          ))}
        </div>
        <h2 className="movie-title">{title}</h2>
        <Rating rating={rating} />
      </footer>
    </CardContainer>
  );
};

export default MovieCard;
