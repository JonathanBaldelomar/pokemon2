import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import ThemeContext from '../context/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {

  const activeStyle = { color: "#272727" };

  return (
    <div>
      <nav>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography align="inherit" variant="h6" color="inherit" component="div">
              <NavLink to="https://www.facebook.com/JalasoftLatam" style={activeStyle}>
                <IconButton aria-label="facebook" size="large">
                  <FacebookIcon fontSize="large" />
                </IconButton>
              </NavLink>
              {" | "}
              <NavLink to="https://twitter.com/Jalasoftoficial" style={activeStyle}>
                <IconButton aria-label="twitter" size="large">
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    </div>
  )
}

export default Footer;