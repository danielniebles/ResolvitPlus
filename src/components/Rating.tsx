import styled from "styled-components";

const RatingContainer = styled.div`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  .uis-star {
    font-size: 1.25rem;
    color: #ffff00;
    margin-right: 0.25rem;
  }
`;

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => (
  <RatingContainer>
    <i className="uis uis-star"></i>
    <span>{rating}</span>
  </RatingContainer>
);

export default Rating;
