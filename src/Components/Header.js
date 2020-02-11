import React, { Component } from "react";
import "../App.css";
class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="icon-wrapper">
          <i class="plus icon"></i>
          <i class="book icon"></i>
          <i class="edit icon"></i>
          <i class="trash alternate icon"></i>
        </div>
      </div>
    );
  }
}

export default Header;
