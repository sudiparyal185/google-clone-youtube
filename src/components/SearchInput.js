import React, { useState } from "react";
import {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
} from "./SearchInput.Styled";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const SearchInput = ({ showButtons = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?${searchTerm}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <StyledInputWrapper>
        <StyledSearchIcon aria-labelledby='search' data-testid='search-icon' />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid='search-input'
        />
        <Tooltip title='Search by voice'>
          <StyledMicIcon aria-label='voiceover' data-testid='mic-icon' />
        </Tooltip>
      </StyledInputWrapper>
      <StyledButtonContainer showButtons={showButtons}>
        <Button variant='outlined' type='submit'>
          Google Search
        </Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </StyledButtonContainer>
    </form>
  );
};

export default SearchInput;
