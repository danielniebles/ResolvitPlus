import styled from "styled-components";
import Genre from "../interfaces/Genre";
import buildImageUrl from "../utils/buildImageUrl";
import Chip from "./Chip";
import Rating from "./Rating";

const CoverContainer = styled.div<{ posterPath: string }>`
  height: inherit;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  background: linear-gradient(to top, transparent 0%, black 100%);
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-clip: border-box;
    background-image: url(${({ posterPath }) => posterPath});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
  }
  aside {
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
  }
`;

const MovieCover = ({
  rating,
  title,
  backdrops,
  overview,
}: {
  rating: number;
  title: string;
  backdrops: { width: number; file_path: string }[];
  overview: string;
}) => {
  const [selectedBackdrop] = backdrops;
  return (
    <CoverContainer
      posterPath={buildImageUrl({
        width: 1280,
        imgPath: selectedBackdrop.file_path,
      })}
    >
      <aside className="info__footer">
        <div>
          <h1 className="movie-title">{title}</h1>
          <p>{overview}</p>
          <Rating rating={rating} />
        </div>
      </aside>
    </CoverContainer>
  );
};

export default MovieCover;
