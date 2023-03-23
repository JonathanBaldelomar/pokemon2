import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import ThemeContext from '../context/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {

  const activeStyle = { color: "#272727" };
  const data = useContext(ThemeContext); 

  return (
    <div className={data.theme}>
      <nav>
        <AppBar position="static">
        <Toolbar variant="dense">
          <Typography align= "inherit" variant="h6" color="inherit" component="div">
            <NavLink to="https://en.wikipedia.org/wiki/Facebook" style={activeStyle}>
              Facebook
            </NavLink>
            {" | "}
            <NavLink to="https://en.wikipedia.org/wiki/Twitter" style={activeStyle}>
              Twitter
            </NavLink>
          </Typography>
        </Toolbar>
        </AppBar>
      </nav>
    </div>
  )
}

export default Footer;