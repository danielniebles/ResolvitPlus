import styled from "styled-components";

const StyledChip = styled.span`
  background-color: ${({ color }) => color};
  padding: 5px;
  border-radius: 7px;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  height: fit-content;
  width: fit-content;
`;

interface ChipProps {
  text: string;
  color: string;
}

const Chip = ({ text, color }: ChipProps) => (
  <StyledChip color={color}>{text}</StyledChip>
);

export default Chip;
