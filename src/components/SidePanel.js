import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import Calender from '../components/Calender';


//import '../css/icon.css';

class SidePanel extends Component {
  constructor(props) {
    super(props);
  }
  handleCalenderChange = () => {

  }
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <a href="#">
            <div className="logo-img">
              <img
                src="https://uploads.codesandbox.io/uploads/user/c1e05e50-0c65-4559-b17d-64e5dbc5c73b/amIz-overleaf_og_logo.png"
                alt="logo_image"
                height="80"
                width="80"
              />
            </div>
          </a>
          <span className="log-name">7Miracle</span>
        </div>

        <div className="sidebar-wrapper">
          <ul className="nav">
            <li>
              <NavLink to="/">
                <i className="fa fa-pie-chart" />
                <p>Dashboard</p>
              </NavLink>
              <Calender onCalenderChange={this.handleCalenderChange} />
            </li>
            <li>
              <NavLink to="/profile">
                <i className="fas fa-user" />
                <p>User Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/user">
                <i className="far fa-user-plus" />
                <p>Add Users</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/report">
                <i className="fas fa-clipboard-list" />
                <p>Mothly Report</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <i className="fas fa-phone" />
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
