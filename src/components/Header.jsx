import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../actions/users";
import { gameSearch } from "../actions/games";
import { bindActionCreators } from "redux";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  onChange(e) {
    this.props.gameSearch(e.target.value);
  }

  render() {
    let { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#" to="/">
                Home
              </Link>
            </li>
            {!user.is_authenticated ? (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/signup">
                    Signup
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="#!" onClick={this.logout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
          {user.is_authenticated ? (
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onChange}
              />
            </form>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators({ logout, gameSearch }, dispatch)
)(Header);
