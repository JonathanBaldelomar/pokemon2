import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import ThemeContext from '../context/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Header = () => {
  const activeStyle = { color: "#272727" };
  const data = useContext(ThemeContext);

  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <nav>
        <AppBar position="static">
          <Toolbar variant="dense">
            <FormGroup>
              <FormControlLabel control={<Switch
                checked={checked}
                onChange={handleChange}
                onClick={data.handleTheme}
                color="secondary"
              />}
                label="Dark Theme"
              />
            </FormGroup>
            <Typography variant="h6" color="inherit" component="div">
              <NavLink to="/pokedex" style={activeStyle}>
                Pokedex
              </NavLink>
              {" | "}
              <NavLink to="/favorite" style={activeStyle}>
                Favorites
              </NavLink>
              {" | "}
              <NavLink to="/login" style={activeStyle}>
                LOGIN
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    </div>
  )
}

export default Header;
