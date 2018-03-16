import React from "react";
import { login } from "../actions/users";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .login({
        username: e.target.elements["username"].value,
        password: e.target.elements["password"].value
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => {});
  }

  render() {
    let { user } = this.props;
    return (
      <div className="container">
        <form style={{ margin: 50 }} onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          {user.errors.length
            ? user.errors.map((err, index) => (
                <div className="form-group" key={index}>
                  <label className="text-danger">{err}</label>
                </div>
              ))
            : null}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(state => state, dispatch => bindActionCreators({ login }, dispatch))(
    Login
  )
);
