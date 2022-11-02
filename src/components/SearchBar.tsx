import { useState, memo, ChangeEvent, SyntheticEvent } from "react";
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
  }

  .search__input:focus {
    color: #ffffff;
  }
`;

const SearchBar = ({ setKeyword }: { setKeyword: (arg: string) => void }) => {
  const [value, setValue] = useState("");

  // TODO: Check this event type
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setKeyword(value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        placeholder="Search a gif..."
        onChange={handleInputChange}
        type="text"
        value={value}
        className="search__input"
      />
      <PrimaryButton text="Buscar" onClick={handleSubmit} border="0 10px 10px 0" />
    </StyledForm>
  );
};

export default memo(SearchBar);
