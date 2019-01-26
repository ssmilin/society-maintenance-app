import React, { Component } from "react";

import "./css/wrapper.css";
import "./css/sidebar.css";
import "./css/content.css";

import SidePanel from "./components/SidePanel";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SidePanel />
        <div className="main-panel">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
