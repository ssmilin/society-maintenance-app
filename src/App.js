import React, { Component } from "react";
import "./css/dashboard.css";
import SidePanel from "./components/SidePanel";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SidePanel />
        <div className="main-panel">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
