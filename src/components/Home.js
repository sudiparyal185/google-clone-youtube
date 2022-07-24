import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledLogoContainer,
} from "./Home.Styled";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "./SearchInput";
const Home = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledHeaderLeft>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/Images'>Images</Link>
          <Tooltip title='Google apps'>
            <IconButton>
              <AppsIcon
                data-testid='app-icon'
                sx={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.87)' }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title='Google Account'>
            <Avatar
              data-testid='header-avatar'
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#8ab4f8',
                color: 'white',
                cursor: 'pointer',
                marginRight: '8px',
              }}
            >
              JP
            </Avatar>
          </Tooltip>
        </StyledHeaderRight>
      </StyledHeaderWrapper>
      <StyledLogoContainer>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
          alt='google-logo'
        />
        <div>
          <SearchInput showButtons={true} />
        </div>
      </StyledLogoContainer>
    </StyledHeaderContainer>
  );
};

export default Home;
