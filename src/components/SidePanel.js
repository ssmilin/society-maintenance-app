import React, { Component } from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import logo from "../img/overleaf_og_logo.png";

class SidePanel extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <a href="#">
            <div className="logo-img">
              <img src={logo} alt="logo_image" height="80" width="80" />
            </div>
          </a>
          <span className="log-name">7Miracle</span>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav" />
        </div>
      </div>
    );
  }
}

export default SidePanel;
