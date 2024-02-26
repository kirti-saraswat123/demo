import React, { useState } from 'react';
import './App.css';

import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
 NavLink,
} from 'reactstrap';

function Header(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className='navbar'> 
    <Nav tabs>
      <NavItem>
        {/* <NavLink href="#" active>
          Link
        </NavLink> */}
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          All product
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Airconditioner</DropdownItem>
          <DropdownItem>Kichen appliances</DropdownItem>
          <DropdownItem>Pc & leptop</DropdownItem>
          <DropdownItem>Gadgets</DropdownItem>
          <DropdownItem>Smart phone</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink  disabled href="#">Home appliances</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  disabled href="#">Audo & video</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Refrigerator
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          New arrivals
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Today's deal
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Gift carde
        </NavLink>
      </NavItem>
    </Nav>
    </div>
  );
}

export default Header;