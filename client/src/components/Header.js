import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3">Credits: {this.props.auth.credits}</li>,
          <li key="2" style={{ padding: "0 10px 0 10px" }}>
            <div className="chip red">
              <a href="/api/logout">Logout</a>
            </div>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="nav-wrapper red">
        <Link
          to={this.props.auth ? "/surveys" : "/"}
          className="brand-logo left"
        >
          Emaily
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {this.renderContent()}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
