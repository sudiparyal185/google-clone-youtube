import { styled } from "@mui/system";

const StyledSearchPageHeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const StyledSearchHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 140px;
  z-index: 1;
  position: sticky;
  top: 0;
  border-bottom: 0.1px solid rgb(95, 99, 104);
  background-color: ${({ theme }) => theme.darkColor};
`;

const StyledHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    form {
      div {
        input {
          width: 450px;
        }
      }
    }
  }
`;

const StyledLogo = styled("img")`
  height: 50px;
  margin: 20px;
  object-fit: contain;
`;

const StyledHeaderMiddle = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledSubOptionsLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 8px;
  svg {
    color: #969ba1;
    font-size: 1rem;
    margin-right: 8px;
  }
  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    margin-right: 12px;
    color: rgb(150, 155, 161);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledOptions = styled("div")`
  display: flex;
  align-items: center;
  color: #969ba1;
`;

const StyledHeaderRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  svg {
    color: #e8eaed;
  }
`;
export {
  StyledSearchPageHeaderContainer,
  StyledSearchHeader,
  StyledHeaderLeft,
  StyledLogo,
  StyledHeaderMiddle,
  StyledSubOptionsLeft,
  StyledOptions,
  StyledHeaderRight,
};
