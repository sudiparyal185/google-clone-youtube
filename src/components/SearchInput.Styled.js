import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const StyledInputWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 20px;
  padding: 16px 24px;
  margin: 0 auto;
  margin-top: 24px;
  max-width: 560px;
  border: 0.1px solid rgb(95, 99, 104);
  border-radius: 999px;
  input {
    flex: 1;
    background-color: ${({ theme }) => theme?.body?.darkColor};
    border: none;
    padding: 16px 24px;
    font-size: medium;
    color: white;
    &:focus {
      outline-width: 0;
    }
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: #9aa0a6;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledMicIcon = styled(MicIcon)`
  color: #9aa0a6;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledButtonContainer = styled("div")`
  display: ${(props) => (props.showButtons ? "flex" : "none")};
  justify-content: center;
  padding-top: 18px;
  button {
    min-height: 32px;
    text-transform: inherit;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    background-color: #303134;
    color: #e8eaed;
    border: 1px solid #303134;
    border-radius: 4px;
    padding: 0 16px;
    margin: 11px 4px;
    &:hover {
      border: 1px solid lightgray;
      border-radius: 4px;
    }
  }
`;

export {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
};
