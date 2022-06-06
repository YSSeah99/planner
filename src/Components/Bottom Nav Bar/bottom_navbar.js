import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './bottom_navbar_styled';
  
const BottomNavbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <a href='https://github.com/YSSeah99/planner' activeStyle>
            Github
          </a>
          <NavLink to='/faq' activeStyle>
            FAQ
          </NavLink>
          <NavLink to='/helpers' activeStyle>
            Meet The Helpers!
          </NavLink>
          <NavLink to='/moduleform' activeStyle>
            Modules Not There?
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default BottomNavbar;