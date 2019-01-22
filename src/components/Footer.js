import React, { Component } from "react";
import logo from "../img/linkedin.png";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  bottom: "0",
  height: "60px"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

var footerstamp = {
  padding: "1px",
  float: "left"
};

var ex4 = {
  "padding-left": "10px"
};

class Footer extends Component {
  render() {
    return (
      <div>
        <div style={phantom} />
        <div style={style}>
          <div style={footerstamp}>
            © 2019 Handcrafted by Smilin
            <a
              style={ex4}
              href="https://www.linkedin.com/in/smilin-sam-13b59b84"
            >
              <img
                src="https://uploads.codesandbox.io/uploads/user/c1e05e50-0c65-4559-b17d-64e5dbc5c73b/bYLD-linkedin.png"
                alt="logo_image"
                height="40"
                width="40"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
