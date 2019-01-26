import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
  }
  mobileSidebarToggle(e) {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
  }
  render() {
    return (
      <Navbar fluid inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <strong>Greenpark Appartments</strong>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown
              eventKey={3}
              title={
                <span>
                  <strong>Welcome SMILIN</strong>
                </span>
              }
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Admin Login</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Log Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
