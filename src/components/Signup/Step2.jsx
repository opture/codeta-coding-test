import React from "react";
import { signup2 } from "../../actions/users";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter, Link } from "react-router-dom";

class SignupStep2 extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    let { user } = this.props;
    if (user.signup.email === undefined) {
      this.props.history.push("/signup");
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props
      .signup2({
        firstname: e.target.elements["firstname"].value,
        lastname: e.target.elements["lastname"].value,
        birthdate: e.target.elements["birthdate"].value,
        newsletter: e.target.elements["newsletter"].value
      })
      .then(() => {
        this.props.history.push("/signup/3");
      })
      .catch(err => {});
  }

  render() {
    let { user } = this.props;
    return (
      <div className="container">
        <form style={{ margin: 50 }} onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <input
              defaultValue={user.signup.firstname}
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="Enter firstname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last name</label>
            <input
              defaultValue={user.signup.lastname}
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Enter lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              defaultValue={user.signup.birthdate}
              type="date"
              className="form-control"
              id="birthdate"
              name="birthdate"
              placeholder="Enter birthdate"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="newsletter"
              id="newsletter"
            />
            <label className="form-check-label" htmlFor="newsletter">
              Accept a newsletter from the site ?
            </label>
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
          <Link style={{ margin: 10 }} className="btn btn-success" to="/signup">
            Step 1
          </Link>
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
  connect(
    state => state,
    dispatch => bindActionCreators({ signup2 }, dispatch)
  )(SignupStep2)
);
