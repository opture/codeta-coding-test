import React from "react";
import { signup } from "../../actions/users";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter, Link } from "react-router-dom";

class SignupStep1 extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .signup({
        username: e.target.elements["username"].value,
        password: e.target.elements["password"].value,
        email: e.target.elements["email"].value,
        phone: e.target.elements["phone"].value
      })
      .then(() => {
        this.props.history.push("/signup/2");
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
              defaultValue={user.signup.username}
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
              defaultValue={user.signup.password}
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              defaultValue={user.signup.email}
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="E-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              defaultValue={user.signup.phone}
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Phone number"
            />
          </div>
          {user.errors.length
            ? user.errors.map((err, index) => (
                <div className="form-group" key={index}>
                  <label className="text-danger">{err}</label>
                </div>
              ))
            : null}
          <button
            type="submit"
            style={{ margin: 10 }}
            className="btn btn-primary"
          >
            Submit
          </button>
          {user.signup.phone !== undefined ? (
            <Link
              style={{ margin: 10 }}
              className="btn btn-success"
              to="/signup/2"
            >
              Step 2
            </Link>
          ) : null}
          {user.signup.firstname !== undefined ? (
            <Link
              style={{ margin: 10 }}
              className="btn btn-success"
              to="/signup/3"
            >
              Step 3
            </Link>
          ) : null}
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(state => state, dispatch => bindActionCreators({ signup }, dispatch))(
    SignupStep1
  )
);
