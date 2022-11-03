import {
  useState,
  memo,
  ChangeEvent,
  SyntheticEvent,
  SetStateAction,
  Dispatch,
} from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const StyledForm = styled.form`
  display: flex;
  padding: 30px;
  .search__input {
    width: 100%;
    border: 3px solid #746f6c;
    border-right: none;
    padding: 5px;
    height: 44px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
    font-family: inherit;
  }
  .search__input:focus {
    color: #ffffff;
  }
`;

interface SearchBarProps {
  setKeyword: Dispatch<SetStateAction<string>>;
  setSearchMode: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const SearchBar = ({ setKeyword, setSearchMode, setPage }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setSearchMode("byKeyword");
    setPage(1);
    setKeyword(value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        placeholder="Search something..."
        onChange={handleInputChange}
        type="text"
        value={value}
        className="search__input"
      />
      <PrimaryButton
        text="Search"
        onClick={handleSubmit}
        border="0 10px 10px 0"
      />
    </StyledForm>
  );
};

export default memo(SearchBar);
