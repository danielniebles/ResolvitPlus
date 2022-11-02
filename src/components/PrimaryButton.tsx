import styled from "styled-components";

const ButtonStyles = styled.a`
  background: linear-gradient(to right, #ca1919, #ff914d);
  background-color: #ca1919;
  color: #fff;
  font-family: Trebuchet MS;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 14px 15px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-block;

  :hover {
    background: linear-gradient(to right, #d05454, #ff9f6d);
    background-color: #d05454;
  }
  :active {
    transform: scale(0.95);
  }
`;

const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => <ButtonStyles onClick={onClick}>{text}</ButtonStyles>;

export default PrimaryButton;
