import styled from "styled-components";

const ButtonStyles = styled.a<{ border?: string }>`
  background: linear-gradient(to right, #ca1919, #ff914d);
  background-color: #ca1919;
  color: #fff;
  font-family: Trebuchet MS;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 10px 10px;
  border: 0px solid #000;
  border-radius: ${({ border }) => border};
  display: inline-block;

  :hover {
    background: linear-gradient(to right, #d05454, #ff9f6d);
    background-color: #d05454;
  }
  :active {
    transform: scale(0.95);
  }
`;

interface PrimaryButtonProps {
  text: string;
  onClick: (arg: any) => void;
  border?: string;
}

const PrimaryButton = ({ text, onClick, border }: PrimaryButtonProps) => (
  <ButtonStyles border={border} onClick={onClick}>
    {text}
  </ButtonStyles>
);

export default PrimaryButton;
