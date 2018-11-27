import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";
import "./Footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleMenuClick = name => {};

  render() {
    return (
      <div className="footer-container">
        <div className="column-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="column-2">&copy; 2018 Tutor Finder</div>
        <div className="column-3">
          <ul className="links">
            <li>
              <h2>Menu</h2>
            </li>
            <li className="menu-item">
              <a onClick={() => this.handleMenuClick("")}>Home</a>
            </li>
            <li className="menu-item">
              <a onClick={() => this.handleMenuClick("")}>About</a>
            </li>
            <li className="menu-item">
              <a onClick={() => this.handleMenuClick("")}>Portfolio</a>
            </li>
            <li className="menu-item">
              <a onClick={() => this.handleMenuClick("")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
