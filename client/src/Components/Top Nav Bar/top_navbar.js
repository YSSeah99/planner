import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './top_navbar_styled';
  
const TopNavbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/modules' activeStyle>
            Modules
          </NavLink>
          <NavLink to='/settings' activeStyle>
            Settings
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
    </Nav>
    </>
  );
};
  
export default TopNavbar;