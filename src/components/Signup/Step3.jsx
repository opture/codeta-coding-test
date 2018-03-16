import React from "react";

import { connect } from "react-redux";

import { withRouter, Link } from "react-router-dom";

class SignupStep3 extends React.Component {
  componentWillMount() {
    let { user } = this.props;
    if (user.signup.firstname === undefined) {
      this.props.history.push("/signup/2");
    }
  }

  render() {
    let { user } = this.props;

    return (
      <div className="container" style={{ marginTop: 50 }}>
        <h1 className="text-center">Registration was successful</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Username</th>
              <th scope="col">E-mail</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Birthday</th>
              <th scope="col">Accept newsletter?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{user.signup.username}</th>
              <th>{user.signup.email}</th>
              <th>{user.signup.password}</th>
              <th>{user.signup.phone}</th>
              <th>{user.signup.firstname}</th>
              <th>{user.signup.lastname}</th>
              <th>{user.signup.birthdate}</th>
              <th>{user.signup.newsletter ? "Yes" : "No"}</th>
            </tr>
          </tbody>
        </table>
        <Link
          href="#!"
          style={{ margin: 10 }}
          to="/signup"
          className="btn btn-success"
        >
          Step 1
        </Link>
        <Link
          href="#!"
          style={{ margin: 10 }}
          to="/signup/2"
          className="btn btn-danger"
        >
          Step 2
        </Link>
      </div>
    );
  }
}

export default withRouter(connect(state => state)(SignupStep3));
