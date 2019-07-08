import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from "../media/a-logo.png";
import "./Menu.css"

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div id="menu-component">
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <img alt='' src={logo} onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(0)}>Problem 1</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(1)}>Problem 2</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(2)}>Problem 3</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(3)}>Problem 4</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(4)}>Problem 5</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(5)}>Problem 6</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(6)}>Problem 7</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.changeProblem(7)}>Problem 8</MenuItem>
      </Menu>
    </div>
  );
}
