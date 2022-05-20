import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/app' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/nutritioninfo' activeStyle>
            NutritionInfo
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;