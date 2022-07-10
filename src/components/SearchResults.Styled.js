import { styled } from "@mui/system";

const SearchResultsContainer = styled("div")`
  max-width: 650px;
  margin-left: 107px;
  margin-bottom: 100px;
  top: 140px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SearchResultsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 48px 0;
`;

const SearchResultsTitle = styled("a")`
  text-decoration: none;
  img {
    object-fit: contain;
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
  &:hover {
    text-decoration: underline;
    color: #bdc1c6;
  }
`;

export { SearchResultsContainer, SearchResultsWrapper, SearchResultsTitle };
