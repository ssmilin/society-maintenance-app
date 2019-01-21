import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import logo from "../img/overleaf_og_logo.png";

import DashBoard from "../components/DashBoard";

//import '../css/icon.css';

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
          <ul className="nav">
            <li>
              <NavLink to="/">
                <i className="pe-7s-graph" />

                <p>Dashboard</p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/user">
                <i className="pe-7s-add-user" />

                <p>Add Users</p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile">
                <i className="pe-7s-user" />

                <p>User Profile</p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/report">
                <i className="pe-7s-note2" />

                <p>Mothly Report</p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact">
                <i className="pe-7s-call" />

                <p>Contact</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SidePanel;
