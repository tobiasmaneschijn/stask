import "./Header.css";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
} from "shards-react";

import React, { useState, useEffect } from "react";

const HeaderComponent = ({ currentPage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <Navbar type="light" theme="github" expand="md">
      <NavbarBrand href="#">Your Assignment Library</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={collapseOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/">Assignments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <Dropdown  open={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle nav caret>
              Help
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink className="dropdownLink"  href="/faq">F.A.Q.</NavLink>
              </DropdownItem>
              <DropdownItem>
              <NavLink  className="dropdownLink" href="/support">Support</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>

        <Nav navbar className="ml-auto">
          <InputGroup size="sm" seamless>
            <InputGroupAddon type="prepend">
              <InputGroupText></InputGroupText>
            </InputGroupAddon>
            <FormInput
              className="border-0"
              placeholder="Search assignments..."
            />
          </InputGroup>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
